import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  passwordVisible = false;
  constructor(private fb: FormBuilder, 
              private router: Router,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;
      // Send data to backend thing
      this.http.post('https://your-backend-url.com/api/signin', formData)
        .subscribe(response => {
          console.log('Sign in successful!', response);
          // Handle successful sign-in here (e.g., navigate to another page)
        }, error => {
          console.error('Sign in failed', error);
          // Handle error (e.g., show a message to the user)
        });
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  navToSignUp()
  {
    this.router.navigateByUrl('/sign-up');
  }
}
