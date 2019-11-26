import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface CompilationDetails {
  language: string;
  code: string;
  input: string;
}

// interface TokenResponse {
//   token: string;
// }

// export interface TokenPayload {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
// }

@Injectable()
export class CompilationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}


  public compile(content: CompilationDetails): Observable<any> {
    console.log(content);
    return this.http.post(`http://localhost:8080/api/v1/compile`, content);
  }
}
