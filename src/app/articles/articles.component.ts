import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  test: any;
  ngOnInit() {
    this.test = history.state.data;
    console.log(history.state.data);
  }

}
