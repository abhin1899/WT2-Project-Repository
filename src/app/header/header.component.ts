import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  testreturn: string[];
  searchtext = '';
  selectedString: any = {val: null};
  target: any;
  idAttr: any;
  fillSearchBar: any;
  queryString: any = {problem: null};
  constructor(public auth: AuthenticationService, private apiService: ApiService, private router: Router, private data: ShareService) {}
  ngOnInit() {
  }

   openSearch() {
    if (this.searchtext !== '') {
      this.selectedString.val = this.searchtext;
      this.apiService.implementSearch(this.selectedString).subscribe((policies: string[]) => {
        if (policies.length === 0) {
          this.testreturn = null;
        } else {
          this.testreturn = policies;
        }
        console.log(this.testreturn);
      });
    } else {
      this.removeSearch();
    }
  }

  removeSearch() {
    this.testreturn = null;
  }

  resultSearch(event) {
    this.target = event.target || event.srcElement || event.currentTarget;
    this.idAttr = this.target.innerHTML;
    console.log(this.idAttr);
    this.queryString.problem = this.idAttr.trim();
    this.data.changeMessage(this.queryString);
    this.router.navigate(['/problem'], {state: {data: this.idAttr}});
    this.fillSearchBar = document.querySelector('input');
    this.fillSearchBar.value = this.idAttr;
    this.removeSearch();
  }


  navProblem(inp: any) {
    console.log(inp);
    this.router.navigate(['/problems'], {state: {data: inp}});
  }

}
