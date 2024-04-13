import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signInForm!: FormGroup;
  passwordVisible = false;
  isChecked: boolean = false;
  constructor(private fb: FormBuilder, 
              private signUpService: SignUpService,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      Name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      aadhaar_number: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  checked()
  {
    if(this.isChecked)
    {
      this.isChecked=false
      console.log("unchecked",this.isChecked)
    }
    else{
      this.isChecked=true
      console.log("checked",this.isChecked)
    }
    
  }
  onSubmit() {
    
    console.log("form submited successfully", this.signInForm.value)
    if(this.isChecked==true){
      if (this.signInForm.valid) {
        const formData = this.signInForm.value;

        const apiUrl = 'https://sandbox.surepass.io/api/v1/aadhaar-v2/generate-otp';

       const aadhar={
        id_number:formData.aadhaar_number
       }
       const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMTk2NDk3NCwianRpIjoiOTFhOWQ1M2MtYWZmOC00MzczLTgxMTItZWJmYzFmMDk1YWFmIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LnVzZXJuYW1lXzJlc3ZzZndydWpieG1jNXRndWlqc3IxdXZzZEBzdXJlcGFzcy5pbyIsIm5iZiI6MTcxMTk2NDk3NCwiZXhwIjoxNzE0NTU2OTc0LCJ1c2VyX2NsYWltcyI6eyJzY29wZXMiOlsidXNlciJdfX0.WJdDJTDxUPP2l9F622bxj-Q0vc-6Gp-pNIbToD_RWtA'; // Your token

      const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`, // Add the Bearer token to the header
          'Content-Type': 'application/json' // Optionally, specify content type
      });
       console.log(aadhar)
        this.http.post(apiUrl, aadhar,{ headers: headers })
          .subscribe(response => {
            console.log('Sign in successful!', response);
            this.signUpService.signUp(response);
            // Handle successful sign-in here (e.g., navigate to another page)
          }, error => {
            console.error('Sign in failed', error);
            // Handle error (e.g., show a message to the user)
          });
      }
    }
    else{
      alert("Please accept the terms and conditions")
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  signInWithGoogle()
  {
    // Sign in with Google

  }
}
