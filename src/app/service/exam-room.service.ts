import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExamRoom} from '../models/exam-room';

@Injectable({
  providedIn: 'root',
})
export class ExamRoomService {

  private url = environment.appUrl.serverUrl + environment.appUrl.apiUrl + '/examRoom';
  constructor(private httpClient: HttpClient) { }

  create(examRoom: ExamRoom): Observable<ExamRoom> {
    return this.httpClient.post<ExamRoom>(this.url, examRoom);
  }

  update(_id, examRoom: ExamRoom): Observable<ExamRoom> {
    return this.httpClient.put<ExamRoom>(`${this.url}/${_id}`, examRoom);
  }

  findById(_id): Observable<ExamRoom> {
    return this.httpClient.get<ExamRoom>(`${this.url}/${_id}`);
  }

  findAll(): Observable<ExamRoom[]> {
    return this.httpClient.get<ExamRoom[]>(this.url);
  }

  delete(_id): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${_id}`);
  }

}
