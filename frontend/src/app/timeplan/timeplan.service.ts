import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilitiesService } from '../data/utilities.service';
import { MyEvent } from './myevent';

@Injectable({
  providedIn: 'root',
})
export class TimeplanService {
  private apiServer = this.utilitiesService.getApiUrl() + '/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    private httpClient: HttpClient,
    private utilitiesService: UtilitiesService
  ) {}

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(() => error || 'Node.js server error');
  }

  getAllEvents(): Observable<MyEvent[]> {
    console.log('service getAllEvents() start ' + this.apiServer + '/');
    return this.httpClient
      .get<MyEvent[]>(this.apiServer + '/googlecalendar')
      .pipe(
        map((events) => {
          //console.log('service getAllEvents() end ' + JSON.stringify(events));
          return events;
        }),
        catchError(this.handleError)
      );
  }
}
