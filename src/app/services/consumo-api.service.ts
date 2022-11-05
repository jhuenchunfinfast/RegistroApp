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
      'Response-Type': 'application/json',
    }),
  };

  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPost(id) {
    return this.http.get(`${this.apiURL}/posts/${id}`);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(retry(3));
  }
  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(retry(3));
  }
  getAsignaturas(): Observable<any> {
    return this.http.get(this.apiURL + '/comments/').pipe(retry(3));
  }

  createPost(post): Observable<any> {
    return this.http.post(`${this.apiURL}/posts/`, post).pipe(retry(3));
  }

  updatePost(id, post): Observable<any> {
    return this.http.put(`${this.apiURL}/posts/${id}`, post).pipe(retry(3));
  }

  deletePost(id): Observable<any> {
    return this.http.delete(`${this.apiURL}/posts/${id}`).pipe(retry(3));
  }
}
