import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  op: any = {limit: null};
  trendyStatments: any;
  testreturn: string[];
  searchtext = '';
  selectedString: any = {val: null};
  target: any;
  idAttr: any;
  fillSearchBar: any;
  queryString: any = {problem: null};

  constructor(public auth: AuthenticationService, private apiService: ApiService, private router: Router, private data: ShareService) { }
  ngOnInit() {
    this.apiService.getProblems(this.op).subscribe(
      (data) => {
        this.trendyStatments = data;
        console.log(data);
      },
      err => {
        console.error(err);
      }
    );
  }

  resultSearch(inp: any) {
    this.queryString.problem = inp.trim();
    this.data.changeMessage(this.queryString);
    this.router.navigate(['/problem']);
  }

}
