// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module'
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'; 
import { ProfileModule } from './profile/profile.module'; 

import { HttpClientModule } from '@angular/common/http' // *new
const appRoutes: Routes = [
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomeModule' 
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  { 
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full' 
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    ProfileModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule // *new
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
