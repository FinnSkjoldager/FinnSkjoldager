import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DataService } from '../data/dataservice';
import { Router } from '@angular/router';
import { UtilitiesService } from '../data/utilities.service';

@Component({
  selector: 'app-opslag',
  templateUrl: './opslag.component.html',
  styleUrls: ['./opslag.component.css'],
})
export class OpslagComponent implements OnInit {
  @Input()
  shareData: String;
  adressArr: String[];
  res: String = '';
  resadresse: String = '';
  resScrap118: String = '';
  baseUrl = '';
  apiUrl = '';
  constructor(
    private dataservice: DataService,
    private http: HttpClient,
    private router: Router,
    private utilitiesService: UtilitiesService
  ) {}
  @ViewChild('inputCVR') inputCVR: ElementRef;
  @ViewChild('input118') input118: ElementRef;
  ngOnInit(): void {
    this.baseUrl = this.utilitiesService.getApiUrl();
    console.log('baseUrl ' + this.baseUrl);
    this.apiUrl = this.baseUrl + '/api';
    // this.setTestOutput();
  }
  //https://api.dataforsyningen.dk/adresser?postnr=8320&vejnavn=Bakkevej
  //https://api.dataforsyningen.dk/vejnavne/autocomplete?q=vibor
  //https://api.dataforsyningen.dk/adresser?q=Lilledal 1
  //"adressebetegnelse": "Visbjerg Hegn 226, 8320 Mårslet",
  setNew(event: any) {
    this.router.navigate(['/besoeg-edit/-1']);
  }
  private handleError(error: HttpErrorResponse) {
    console.log('FINN server error:', error);
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => errMessage);
    }
    return throwError(() => error || 'Node.js server error');
  }
  setValue(value) {
    if (value == null) return '';
    else return value;
  }
  setOutput(json) {
    let st = '';
    st += json['name'] + '\n';
    st += 'CVR: ' + json['vat'] + '\n';
    st += json['address'] + '\n';
    st += json['zipcode'] + ' ';
    st += json['city'] + '\n';
    st += json['phone'] + '\n';
    st += json['email'] + '\n';
    st += json['industrydesc'] + '\n';
    st += 'Ansatte: ' + json['employees'] + '\n';
    this.dataservice.aktBesoeg.firmanavn = this.setValue(json['name']);
    this.dataservice.aktBesoeg.adresse = this.setValue(json['address']);
    this.dataservice.aktBesoeg.adresse += ', ' + this.setValue(json['zipcode']);
    this.dataservice.aktBesoeg.adresse += ' ' + this.setValue(json['city']);
    this.dataservice.aktBesoeg.postnummer = this.setValue(json['zipcode']);
    this.dataservice.aktBesoeg.telefonnr = this.setValue(json['phone']);
    this.dataservice.aktBesoeg.mailadresse = this.setValue(json['email']);
    return st;
    let l = json['productionunits'].length;
    st += l;
    for (let i = 1; i < l; i++) {
      st += '   Pnr: ' + json['productionunits'][i]['pno'] + '\n';
      st += '   Ansatte: ' + json['productionunits'][i]['employees'] + '\n';
    }
    return st;
  }
  setTestOutput() {
    let st = '';
    //this.oppoSuits.forEach(x => st+=x+"\n");
    //this.resadresse = st;
    this.http.get('./assets/nissens.json').subscribe((data) => {
      console.log('DATA ' + data);
      this.res = this.setOutput(data);
    });
  }
  getOpslagCVR(event: any, keyType) {
    //console.log("CHANGE "+keyType+" "+event.target.value+"\n");
    //this.res += "CHANGE "+keyType+" "+event.target.value+"\n";
    //event.preventDefault()
    //return;
    //let search = event.target.value;
    let search = this.inputCVR.nativeElement.value;
    const headers = new HttpHeaders()
      .set('content-type', 'application/text')
      .set('Agent', 'FinnGram')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
      .set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
    let url = this.apiUrl + '/opslag/getcvr/' + search;
    this.http
      .get<any>(url, { headers: headers })
      .pipe(
        map((json) => {
          //console.log(json);
          return json;
        }),
        catchError(this.handleError)
      )
      .subscribe((data) => {
        //console.log("DATA "+data["message"]);
        if (data['message'] == undefined) {
          this.res = this.setOutput(data);
        } else {
          this.res =
            'Du har udført 50 søgninger idag som er det maximale.\nI morgen kan du igen udføre 50 søgninger.';
        }
      });
  }
  getOpslagAdresse(event: any) {
    //event.preventDefault()
    let search = event.target.value;
    search += '* ';
    console.log('ADR ' + search);
    this.adressArr = [];
    let url = '';
    url = 'https://api.dataforsyningen.dk/vejnavne/autocomplete?q=' + search;
    url = this.apiUrl + '/opslag/getadresse/' + search;
    this.http
      .get<any>(url)
      .pipe(
        map((json) => {
          //console.log(json);
          return json;
        }),
        catchError(this.handleError)
      )
      .subscribe((data) => {
        //console.log("DATA "+data);
        let st = '';
        let i = 0;
        data.forEach((x) => {
          let s = '';
          //s = x["vejnavn"]["navn"];
          s = x['adressebetegnelse'];
          this.adressArr.push(s);
          i += 1;
          //console.log(s);
          st += s + '\n';
        });
        //this.resadresse = st;
        this.resadresse = 'Antal adresser fundet: ' + i;
      });
  }
  getScrap118(event: any) {
    //event.preventDefault();
    //let search = event.target.value;
    let search = this.input118.nativeElement.value;
    console.log('ADR ' + search);
    let url = this.apiUrl + '/opslag/getscrap118/' + search;
    console.log('URL ' + url);
    const headers = new HttpHeaders()
      .set('content-type', 'application/text')
      .set('Agent', 'FinnGram')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
      .set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
    this.http
      .get<any>(url, { headers: headers })
      .pipe(
        map((res) => {
          console.log(res);
          return res;
        }),
        catchError(this.handleError)
      )
      .subscribe((data) => {
        this.resScrap118 = data['respone'];
        if (this.resScrap118 == '') this.resScrap118 = 'intet resultat';
        console.log('DATA ' + this.resScrap118);
      });
  }
  onCheckboxChange(event: any) {
    let v = event.target.value;
    this.resadresse = v;
    /*
    if (event.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
       const index = website.controls.findIndex(x => x.value === e.target.value);
       website.removeAt(index);
    }
    */
  }
}
