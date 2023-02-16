import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data/dataservice';
import { IBesoeg } from '../data/model';

@Component({
  selector: 'app-besoeg',
  templateUrl: './besoeg.component.html',
  styleUrls: ['./besoeg.component.css']
})
export class BesoegComponent implements OnInit {
  @Input() 
  besoegArr: IBesoeg[] = [];
  constructor(private dataservice : DataService) { }
  ngOnInit(): void {
    this.getBesoeg();
  }
  getBesoeg(){
    if (this.dataservice.muckTest){
      this.besoegArr = this.dataservice.getAllBesoegMuckTest();
    }else{
      this.dataservice.getAllBesoeg() 
      .subscribe(                  
          (besoegArr) => {                     
            console.log('Response received');
          console.log(besoegArr);
          this.besoegArr = besoegArr;
        });
    }
  }

  sort(prop: string) {
    //this.customers = this.sorterService.sort(this.customers, prop);
  }
}
