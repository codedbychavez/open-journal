// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// *new
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [TopNavigationComponent, LeftNavigationComponent, FooterComponent, SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule // *new
  ]
  ,
  exports: [
    TopNavigationComponent,
    LeftNavigationComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent
  ]
})
export class SharedModule { }
