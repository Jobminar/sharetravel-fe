import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingComponent } from './starting/starting.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
 {path:'',component:StartingComponent},
 {path: 'get-starting',component:GetStartedComponent},
 {path:'sign-in',component:SignInComponent},
 {path:'sign-up',component:SignUpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
