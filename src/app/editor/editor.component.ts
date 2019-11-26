import { Component, OnInit, ViewChild } from '@angular/core';
import { CompilationService, CompilationDetails } from '../compilation.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  text = '';
  options: any = {setHighlightActiveLine: true, maxLines: 1000, printMargin: false, enableBasicAutocompletion: true};
  input: any = {
   content: ''
  };
  chosenLang: '';
  languages: any = ['c', 'c++', 'java'];

  request: CompilationDetails = {
    language: '',
    code: '',
    input: '',
  };
  output: any;
  constructor(private compilationService: CompilationService) { }


  ngOnInit() {
  }

  chosen(language: any) {
    this.chosenLang = language;
  }

  compile() {
    // alert('hello');
    console.log(this.chosenLang);
    console.log(this.input.content);
    console.log(this.text);

    this.request.language = this.chosenLang;
    this.request.code = this.text;
    this.request.input = this.input.content;
    if (this.request.language === undefined) {
      alert('Please Choose A Language');
    } else {
      this.compilationService.compile(this.request).subscribe(
        (data) => {
          console.log(data.output);
          this.output = data.output;
        },
        err => {
          console.error(err);
        }
      );
    }
  }

}
