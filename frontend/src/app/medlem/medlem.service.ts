import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilitiesService } from '../data/utilities.service';
import { Medlem } from './medlem';

@Injectable({
  providedIn: 'root'
})
export class MedlemService {
  private apiServer = this.utilitiesService.getApiUrl()+"/api/medlem";
  //private apiServer = "https://aa.karlsminde1.dk/api/medlem";
  //private apiServer = "http://localhost/api/medlem";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private utilitiesService: UtilitiesService) { }
 
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

getAll(): Observable<Medlem[]> {
  console.log("service getAll() start "+this.apiServer + '/getmedlemmer');
  return this.httpClient.get<Medlem[]>(this.apiServer + '/getmedlemmer')
  .pipe(
    map(medlem => {
        console.log("service getAll() end "+JSON.stringify(medlem[0]));
        return medlem;
    }),
    catchError(this.handleError)
);}

create(Medlem): Observable<Medlem> {
    return this.httpClient.post<Medlem>(this.apiServer + '/Medlems/', JSON.stringify(Medlem), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Medlem> {
    return this.httpClient.get<Medlem>(this.apiServer + '/Medlems/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, Medlem): Observable<Medlem> {
    return this.httpClient.put<Medlem>(this.apiServer + '/Medlems/' + id, JSON.stringify(Medlem), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Medlem>(this.apiServer + '/Medlems/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}