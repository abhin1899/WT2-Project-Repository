import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile');
      },
      err => {
        console.error(err);
      }
    );
  }

}
