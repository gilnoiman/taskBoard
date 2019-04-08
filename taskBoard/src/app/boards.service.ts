import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iboard } from './interfaces/iboard';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

    boardsList: Iboard[];
    ApiRequestLinks: object = {
      'BoardListData': 'https://api.myjson.com/bins/quaec',
    };


  constructor(private http: HttpClient) { }

  // Get BoardList Data
  getBoardListData(): Observable<Iboard[]> {
    const localStrorageItem = JSON.parse(localStorage.getItem('boards')); // get data from local storage
    if (localStrorageItem) { // check if anything returned from local storage
      return of(localStrorageItem.boards); // return the local storage data
    } else {
      // if no local storage then fatch data from API
      return this.http.get<Iboard[]>(this.ApiRequestLinks['BoardListData'])
      .pipe(
        catchError(this.handleError)
      );
    }
  }

  addNewBoard(newBoard: Iboard) {
    // if we have server we will save this new board in the server with an http request.
    // but we don't have a server so we will save it in local storage.

  }

  // Save To Local Storage
  setLocalStorageBoards(newBoards: Iboard[]) {
    localStorage.setItem('boards', JSON.stringify({boards: newBoards}));
  }

  // delete from local storage
  async deleteLocalStorageBoards() {
    localStorage.removeItem('boards');
  }


  // ERROR HANDELING:
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'there was a problem fatching the data from the server; please try again later.');
  }

}
