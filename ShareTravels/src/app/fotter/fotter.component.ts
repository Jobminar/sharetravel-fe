import { Component } from '@angular/core';

import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faCar,faMagnifyingGlass ,faUserCircle} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrl: './fotter.component.css'
})
export class FotterComponent {
    houseIcon= faHouse;
    scearchIcon=faMagnifyingGlass
    carIcon = faCar;
    userIcon=faUserCircle

    activeIcon: string = 'home'; // Default active icon

    constructor() {}



    setActiveIcon(iconName: string) {
      this.activeIcon = iconName;
    }
}
