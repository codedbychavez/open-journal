import { Component, OnInit } from '@angular/core';
// *new
import { ActivatedRoute } from '@angular/router' ;
import { ProfileService } from '../profile.service'
import { Journal } from '../models/journal.model'
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-journal',
  templateUrl: './edit-journal.component.html',
  styleUrls: ['./edit-journal.component.css']
})
export class EditJournalComponent implements OnInit {
  // *new
  public journal;
  journalModel: Journal;
  editJournalForm: FormGroup;

  constructor(
    // *new
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
  ) { 
    this.journalModel = new Journal();
   }

  ngOnInit(): void {
    // *new
    this.getJournal();

    this.editJournalForm = this.formBuilder.group({
      id: this.journalModel.id,
      name: this.journalModel.name,
      description: this.journalModel.description,
      content: this.journalModel.content
    })
  }

  getJournal() {
    const journalId = +this.route.snapshot.paramMap.get('id')

    this.profileService.getSingleJournal(journalId).subscribe(
      (res) => {
        console.log(res);
        this.journal = res;

        // *new
        this.editJournalForm.patchValue({
          id: this.journal.id,
          name: this.journal.name,
          description: this.journal.description,
          content: this.journal.content,
        });
      }, 
      (err) => {
        console.log(err);
      }
    )

    
  }

  // *new
  editJournalFormSubmit() {
    const formData = this.editJournalForm.getRawValue();

    this.profileService.editJournal(formData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
