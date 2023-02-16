import { Component, OnInit } from '@angular/core';
import { IBesoeg } from '../data/model';
import { DataService } from "../data/dataservice";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-besoeg-show',
  templateUrl: './besoeg-show.component.html',
  styleUrls: ['./besoeg-show.component.css']
})
export class BesoegShowComponent implements OnInit {
    besoeg: IBesoeg = IBesoeg.initBesoeg();
    besoegText = "besoegText";
    constructor(
      private route: ActivatedRoute,
      private dataService: DataService
    ){}
  
    ngOnInit() {
      const id = parseInt(this.route.snapshot.paramMap.get("id"));
      console.log("SHOW " + id);
      if (id !== 0) {
        this.getBesoeg(id);
      }
    }
    getBesoeg(id: number) {
      if (this.dataService.muckTest) {
        //this.besoeg = this.dataService.getBesoegMockTest(id);
        console.log("BESØG " + this.besoeg);
      } else {
        this.dataService.getBesoeg(id).subscribe((besoeg: IBesoeg) => {
          this.besoeg = besoeg;
        });
      }
    }
  }
  