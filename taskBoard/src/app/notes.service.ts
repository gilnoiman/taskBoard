import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inotes } from './interfaces/inotes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotesListData(): Observable<Inotes[]> {

      return this.http.get<Inotes[]>('https://api.myjson.com/bins/17aim4');
  }
}
