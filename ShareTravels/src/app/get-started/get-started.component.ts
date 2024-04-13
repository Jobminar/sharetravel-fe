import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import{MatSliderModule} from '@angular/material/slider'
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css',

})
export class GetStartedComponent {
  isToggled = true;
  constructor(private router: Router){}
  toggleDisplay()
  {
    console.log("toggles display")
    this.router.navigate(['sign-in'])
  }
}
