import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IBesoeg, IApiResponse} from './model';
import { UtilitiesService } from './utilities.service';
import { Medlem } from '../medlem/medlem';

@Injectable()
export class DataService {
    baseUrl = this.utilitiesService.getApiUrl();
    //baseUrl = 'http://ff.karlsminde1.dk';
    customersMuckTest: IBesoeg[] = [];
    muckTest = false;
    aktBesoeg: IBesoeg = new IBesoeg(0,"firma");
    constructor(private http: HttpClient, private utilitiesService: UtilitiesService) { 
        console.log("baseUrl "+ this.baseUrl);
        this.baseUrl += "/api";
        if (this.muckTest){
            let arr : IBesoeg[] = [new IBesoeg(1, "Nissens"), new IBesoeg(2,"JYSK"), new IBesoeg(3,"IBM")];
            for (let i=4; i < 8; i++){
              arr.push(new IBesoeg(i, "OK"));
            }
            this.customersMuckTest = arr;
        }
     }
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

    getAllBesoegMuckTest(): IBesoeg[]{
        return this.customersMuckTest;
    }
    getAllBesoeg(): Observable<IBesoeg[]>{
        console.log("GetAll "+this.baseUrl+"/besoeg/getall")
        return this.http.get<IBesoeg[]>(this.baseUrl+"/besoeg/getall")
            .pipe(
                map(besoegArr => {
                    console.log(besoegArr);
                    return besoegArr;
                }),
                catchError(this.handleError)
            );
    }
    getBesoegMockTest(id : number):IBesoeg{
        return this.customersMuckTest[id];
    }
    getBesoeg(id : number): Observable<IBesoeg>{
        return this.http.get<IBesoeg>(this.baseUrl+"/besoeg/findid/"+id)
            .pipe(
                map(besoeg => {
                    console.log(besoeg);
                    return besoeg;
                }),
                catchError(this.handleError)
            );
    }
    getBesoegMedlem(id : number): Observable<Medlem[]>{
        return this.http.get<Medlem[]>(this.baseUrl+"/besoeg/findmedlemid/"+id)
            .pipe(
                map(medlem => {
                    console.log(medlem);
                    return medlem;
                }),
                catchError(this.handleError)
            );
    }
    insertBesoeg(besoeg: IBesoeg): Observable<IBesoeg>{
       // besoeg.Uopfordretansog=1;
        //besoeg.Ledigtjob="";
    //checkbox true or nothing
    //console.log("str "+besoeg.Uopfordretansog);
    //console.log("int "+besoeg.Ledigtjob);
    console.log(JSON.stringify(besoeg));
        return this.http.post<IBesoeg>(this.baseUrl+"/besoeg/new", besoeg)
        .pipe(catchError(this.handleError));
    }
    updateBesoeg(besoeg: IBesoeg): Observable<boolean>{
        console.log("UPDATE id="+besoeg.id);
        console.log("BESOEG "+JSON.stringify(besoeg));
        console.log("JSON SLUT");
        return this.http.put<IApiResponse>(this.baseUrl+"/besoeg/update", besoeg)
        .pipe(
            map(res => {
                console.log("UPDATE FRONTEND SLUT");
                return res.status;
            }),
            catchError(this.handleError)
        );
    }
    deleteBesoeg(id : number): Observable<boolean>{
        return this.http.delete<IApiResponse>(this.baseUrl+"/besoeg/delete/" + id)
        .pipe(
            map(res => res.status),
            catchError(this.handleError)
        );
    }
    insertBesoegMedlem(besoegid, medlemid): Observable<Medlem>{
        //console.log("ID: "+besoegid;
        //console.log("MEDLEM: "+JSON.stringify(medlem));
        return this.http.post<Medlem>(this.baseUrl+"/besoeg/medlem/new/"+besoegid+"/"+medlemid,null)
         .pipe(catchError(this.handleError));
     }
     deleteBesoegMedlem(besoegid, medlemid): Observable<boolean>{
        let url = this.baseUrl+"/besoeg/medlem/delete/"+besoegid+"/"+medlemid;
        console.log("DELETE URL "+url);
        return this.http.delete<IApiResponse>(url)
        .pipe(
            map(res => res.status),
            catchError(this.handleError)
        );
    }
}
