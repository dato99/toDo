import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './Models/users.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from './Models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: User): Observable<any>{
    return this.http.post<any>("ksjfksdthtjfgf", user);
  }

  authenticate(login: Login): Observable<any>{
    return this.http.post<any>("ksjfksdthtjfgf", login);
  }
}
