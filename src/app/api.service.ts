import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://127.0.0.1/WT2Backend';
  /* readPolicies(): Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.PHP_API_SERVER}/test.php`);
  } */
  constructor(private httpClient: HttpClient) { }

  implementSearch(val: any): Observable<string[]> {
    // console.log(val);
    return this.httpClient.post<string[]>(`${this.PHP_API_SERVER}/search.php`, val, httpOptions);
  }

  getProblem(problem: any): Observable<any> {
    // console.log(problem);
    return this.httpClient.post<string[]>(`${this.PHP_API_SERVER}/getProblem.php`, problem);
  }

  getProblems(all: any): Observable<any> {
    console.log(all);
    return this.httpClient.post<string[]>(`${this.PHP_API_SERVER}/getProblems.php`, all);
  }

  getTrending(limit: any): Observable<any> {
    console.log(limit);
    return this.httpClient.post<string[]>(`${this.PHP_API_SERVER}/getProblems.php`, limit);
  }


  // public compile(content: CompilationDetails): Observable<any> {
  //   console.log(content);
  //   return this.http.post(`http://localhost:8080/api/v1/compile`, content);
  // }
}
