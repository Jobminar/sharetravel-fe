import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faLocationCrosshairs,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  LocationIcon = faLocationCrosshairs;
  scearchIcon=faMagnifyingGlass
}
