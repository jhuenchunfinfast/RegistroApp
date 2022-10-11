import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumoAPIService {
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPost(id) {
    return this.http.get(`${this.apiURL}/posts/${id}`);
  }
  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(retry(3));
  }

  updatePost(id,post): Observable<any> {
    return;
    this.http
      .put(this.apiURL + '/posts/'+id, post) 
      .pipe(retry(3));
  }
}
