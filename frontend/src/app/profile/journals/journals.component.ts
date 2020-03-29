// journals.component.html
import { Component, OnInit } from '@angular/core'
import { ProfileService } from '../profile.service' // *new

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  public journals; // *new

  constructor(
    private profileService: ProfileService // *new
  ) { }

  ngOnInit(): void {
    this.getAllJournals();
  }

  // *new
getAllJournals() {
    this.profileService.getJournals().subscribe(
      (res) => {
        console.log(res);
        this.journals = res
      },
      (err) => {
        console.log(err);
      }
    );
  }

deleteJournal(journalId, index) {
  this.profileService.deleteJournal(journalId).subscribe(
    (res) => {
      console.log(res);
      this.journals.splice(index, 1);
      window.alert('Journal Deleted')
    },
    (err) => {
      console.log(err);
    }
  )
}


}
