// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   user: {id, password} = {id: '', password: ''};

//   constructor(private Auth: AuthService, private router: Router) { }

//   ngOnInit() {
//   }

//   login() {
//     console.log(this.user);
//     this.Auth.getUserDetails(this.user.id, this.user.password).subscribe(data => {
//       if (data.success) {
//         this.router.navigate(['']);
//         this.Auth.setLoggedIn(true);
//       } else {
//         window.alert(data.message);
//       }
//     });
//     console.log(this.user.id, this.user.password);
//   }

// }

import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('');
      },
      err => {
        console.error(err);
      }
    );
  }
}
