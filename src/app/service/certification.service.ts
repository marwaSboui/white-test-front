import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Certification} from '../models/certification';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private url = environment.appUrl.serverUrl + environment.appUrl.apiUrl + '/certification';
  constructor(private httpClient: HttpClient) { }

  create(certification: Certification): Observable<Certification> {
    return this.httpClient.post<Certification>(this.url, certification);
  }

  update(_id, certification: Certification): Observable<Certification> {
    return this.httpClient.put<Certification>(`${this.url}/${_id}`, certification);
  }

  findById(_id): Observable<Certification> {
    return this.httpClient.get<Certification>(`${this.url}/${_id}`);
  }

  findAll(): Observable<Certification[]> {
    return this.httpClient.get<Certification[]>(this.url);
  }

  delete(_id): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${_id}`);
  }

}
