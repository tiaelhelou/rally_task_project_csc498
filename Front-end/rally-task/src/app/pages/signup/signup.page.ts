import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignupService, User } from '../../services/signups/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: User;

  constructor(private router: Router, private service: SignupService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user = form.value;
    this.service.addUser(this.user).subscribe(response => {
      console.log(response);
    })
  }

  signup() {
    this.router.navigate(['/login']);
  }
}
