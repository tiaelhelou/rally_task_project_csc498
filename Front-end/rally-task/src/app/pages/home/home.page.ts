import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  
  ngOnInit() {
  }

  goToTAsk(){
    this.router.navigate(['/task']);
  }

  goToUser(){
    this.router.navigate(['/userprofile']);
  }

  goToRedeem(){
    this.router.navigate(['/redeem']);
  }

  goToLeadboard() {
    this.router.navigate(['/leadboard']);
  }
  
}
