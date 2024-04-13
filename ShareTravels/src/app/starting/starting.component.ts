import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrl: './starting.component.css'
})
export class StartingComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {
      setTimeout(() => {
        this.router.navigate(['get-starting']);
      }, 3000);
  }
}
