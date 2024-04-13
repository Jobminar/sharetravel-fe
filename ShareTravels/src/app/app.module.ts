import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FotterComponent } from './fotter/fotter.component';
import { GetStartedComponent } from './get-started/get-started.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import{MatSliderModule} from '@angular/material/slider';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerificationComponent } from './verification/verification.component';
import { LocationComponent } from './location/location.component';
import { CallComponent } from './call/call.component';
import { StartingComponent } from './starting/starting.component';
import { SignUpComponent } from './sign-up/sign-up.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotterComponent,
    GetStartedComponent,
    SignInComponent,
    VerificationComponent,
    LocationComponent,
    CallComponent,
    StartingComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
   
    MatSliderModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
