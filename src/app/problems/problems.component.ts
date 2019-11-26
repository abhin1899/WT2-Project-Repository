import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {
  cat: any = {category: null};
  op: any = {all: null};
  queryString: any = {problem: null};
  results: any;
  send: any;
  constructor(private apiService: ApiService, private data: ShareService, private router: Router) { }
  ngOnInit() {
    this.cat.category = history.state.data;
    if (this.cat.category !== undefined) {
      this.send = this.cat;
    } else {
      this.send = this.op;
    }
    // console.log(history.state.data);
    this.apiService.getProblems(this.send).subscribe(
      (data) => {
        console.log(data);
        this.results = data;
      },
      err => {
        console.error(err);
      }
    );
  }

  resultSearch(inp: any) {
    console.log(inp);
    this.queryString.problem = inp.trim();
    this.data.changeMessage(this.queryString);
    this.router.navigate(['/problem']);
  }

}
