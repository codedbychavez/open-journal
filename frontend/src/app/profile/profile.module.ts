// profile.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { JournalsComponent } from './journals/journals.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { EditJournalComponent } from './edit-journal/edit-journal.component';

// *new
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [ 
  {
    path: 'profile',
    component: ProfileComponent, 
  }, 
  { 
    path: 'profile/create-journal',
    component: CreateJournalComponent, 
  },
  {
    path: 'profile/edit-journal/:id', 
    component: EditJournalComponent, 
  } 
] 

@NgModule({
  declarations: [ProfileComponent, JournalsComponent, CreateJournalComponent, EditJournalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule, // *new
  ]
})
export class ProfileModule { }
