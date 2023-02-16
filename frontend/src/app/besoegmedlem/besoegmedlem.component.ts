import { Component, OnInit } from '@angular/core';
import { Medlem } from '../medlem/medlem';
import { DataService } from '../data/dataservice';
import { ActivatedRoute, Router} from "@angular/router";
import { IBesoeg } from '../data/model';


@Component({
  selector: 'app-medlem',
  templateUrl: './besoegmedlem.component.html',
  styleUrls: ['./besoegmedlem.component.css']
})
export class BesoegMedlemComponent implements OnInit {
  medlemmer: Medlem[] = [];
  besoeg: IBesoeg;
  constructor(
    public dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getBesoegMedlem(id);
    this.getBesoeg(id);
  }
  getBesoegMedlem(id: number){
    this.dataservice.getBesoegMedlem(id).subscribe((data: Medlem[])=>{
      console.log(data);
      this.medlemmer = data;
      })  
  }
  getBesoeg(id: number){
    this.dataservice.getBesoeg(id).subscribe((data: IBesoeg)=>{
      console.log(data);
      this.besoeg = data;
      })  
  }
  delete(event: Event, medlemid: Number) {
      event.preventDefault();
      this.dataservice.deleteBesoegMedlem(this.besoeg.id, medlemid).subscribe(
        (status: boolean) => {
          if (true) {
            console.log("READY ROUTE");
            let url = '/besoeg-medlem/'+this.besoeg.id;
            this.router.navigate(['/besoeg']).then(() =>{ 
              this.router.navigate([url]);
            }) 
            //this.router.navigate(['/besoeg-medlem/'+this.besoeg.id]);
            /*
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/besoeg-medlem/'+this.besoeg.Id]);
            this.router.onSameUrlNavigation = 'ignore';
            */
          } else {
            //this.errorMessage = 'Ikke muligt at slette besøg !';
          }
        },
        (err) => console.log("ERROR = "+err)
      );
    }
  
}
