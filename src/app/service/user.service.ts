import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlAuth = environment.appUrl.serverUrl + environment.appUrl.authUrl;
  urlApi = environment.appUrl.serverUrl + environment.appUrl.apiUrl + '/user';
  constructor(private httpClient: HttpClient) { }

  createStudent(user: User): Observable<User> {
    return this.httpClient.post<User>(this.urlAuth + '/signup' , user);
  }

  createSupervisor(user: User): Observable<User> {
    return this.httpClient.post<User>(this.urlAuth + '/supervisor/signup' , user);
  }

  findSupervisor(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlApi + '/supervisor');
  }

}
