import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  constructor(private apiService: ApiService, private activatedroute: ActivatedRoute, private data: ShareService) { }
  solution: '';
  statement: any;
  category: '';
  difficulty: '';
  question: '';
  revealSolution = false;
  queryString: any = {problem: null};
  cache: any;
  ngOnInit() {
    // this.cache = JSON.parse(localStorage.getItem('Array'));
    // if (this.cache.statement !== null) {
    //   this.statement = this.cache.statement;
    // }
    console.log(JSON.parse(localStorage.getItem('Array')).statement);
    this.statement = JSON.parse(localStorage.getItem('Array')).statement;
    this.solution = JSON.parse(localStorage.getItem('Array')).solution;
    this.category = JSON.parse(localStorage.getItem('Array')).category;
    this.difficulty = JSON.parse(localStorage.getItem('Array')).difficulty;
    this.question = JSON.parse(localStorage.getItem('Array')).question;
    this.revealSolution = JSON.parse(localStorage.getItem('Array')).reveal;
    this.data.currentMessage.subscribe(message => this.apiService.getProblem(message).subscribe(
      (data) => {
        console.log(data);
        this.statement = data.statement;
        this.solution = data.solution;
        this.category = data.category;
        this.difficulty = data.difficulty;
        this.question = data.problem;
        localStorage.removeItem('Array');
        localStorage.setItem('Array', JSON.stringify({statement: data.statement, solution: data.solution, category: data.category,
          difficulty: data.difficulty, question: data.problem, reveal: this.revealSolution}));
      },
      err => {
        console.error(err);
      }
    ));
    // this.statement = history.state.data;
    // console.log(this.statement);
    // this.queryString.problem = this.statement.trim();

 }

  reveal() {
    this.revealSolution = true;
  }

}
