import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { Router } from '@angular/router';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
  @ViewChild('input1') input1!: ElementRef 
  @ViewChild('input2') input2!: ElementRef
  @ViewChild('input3') input3!: ElementRef 
  @ViewChild('input4') input4!: ElementRef 
  otp: FormGroup;

  constructor(private form: FormBuilder,
           
              private router:Router) { 
    this.otp = this.form.group({
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      inputFour: ''
    });
  }

  onInput(event: any, position: number) {
    const inputValue = event.target.value;
    if (inputValue.length === 1) {
      switch (position) {
        case 1:
          this.input2.nativeElement.focus();
          break;
        case 2:
          this.input3.nativeElement.focus();
          break;
        case 3:
          this.input4.nativeElement.focus();
          break;
        case 4:
          // Focus on next input or do something else when the last input is filled
          break;
        default:
          break;
      }
    }
  }

  login() {
   
  }

 
  
  storeUserData()
  {
    

   
    
  }
  countdownValue!: number;
  countdownInterval: any;
  minutes!: number;
  seconds!: number;
  resendToggling="resend";


  resend(){
   
   
 
 
        this.startCountdown()
     
  }

  startCountdown(): void {
    let totalSeconds = 120; // Initial value in seconds
    this.updateDisplay(totalSeconds);

    this.countdownInterval = setInterval(() => {
      totalSeconds -= 1;
      if (totalSeconds <= 0) {
        this.stopCountdown();
        this.resendToggling="resend";
      } else {
        this.updateDisplay(totalSeconds);
      }
    }, 1000); // Update every second
  }
  stopCountdown(): void {
    clearInterval(this.countdownInterval);
  }
  ngOnDestroy(): void {
    this.stopCountdown();
  }
  updateDisplay(totalSeconds: number): void {
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = totalSeconds % 60;
  }

}
