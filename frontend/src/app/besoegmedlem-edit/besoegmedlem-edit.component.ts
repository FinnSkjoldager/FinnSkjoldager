import { Component, OnInit, ViewChild} from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import { NgForm } from "@angular/forms";
import { DataService } from "../data/dataservice";
import { MedlemService } from '../medlem/medlem.service';
import { IBesoeg } from "../data/model";
import { Medlem } from "../medlem/medlem";

@Component({
  selector: "cm-besoegmedlem-edit",
  templateUrl: "./besoegmedlem-edit.component.html",
  styleUrls: ["./besoegmedlem-edit.component.css"],
})
export class BesoegMedlemEditComponent implements OnInit {
  besoeg: IBesoeg;
  besoegText: String;
  medlemActive: Medlem;
  medlemmer : Medlem[];
  errorMessage: string = "";
  deleteMessageEnabled: boolean = false;
  operationText : String;
  @ViewChild("besoegForm", { static: true }) besoegForm: NgForm = {} as NgForm;

 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    public medlemService: MedlemService
 ){ }

  ngOnInit() {
    console.log("BESOEGMEDLEM-EDIT")
    const id = parseInt(this.route.snapshot.paramMap.get("besoegId"));
    this.besoegText = this.route.snapshot.paramMap.get("besoegText");
    console.log("besoegId "+id);
    this.getMedlemAll();
    this.operationText = "Tilføj";
    if (id > 0) {
      //this.operationText = "Opdater";
      this.getBesoeg(id);
    } 
    if (id == -1){
    }
  }
  getBesoeg(id: number) {
    if (this.dataService.muckTest) {
      this.besoeg = this.dataService.getBesoegMockTest(id);
      console.log("BESØG " + this.besoeg);
    } else {
      this.dataService.getBesoeg(id).subscribe((besoeg: IBesoeg) => {
        this.besoeg = besoeg;
      });
    }
  }
  getMedlemAll(){
    this.medlemService.getAll().subscribe((data: Medlem[])=>{
      console.log(data);
      this.medlemmer = data;
    })  
  }
  submit() {
    //console.log("submit besoeg.id "+this.besoeg.Id);
    console.log("medlemActive "+this.medlemActive);
    //this.router.navigate(['/besoeg-medlem/'+this.besoeg.Id]);
      //if (this.besoeg.Id == 0) {
      if (true) {
        this.dataService.insertBesoegMedlem(this.besoeg.id, this.medlemActive.id).subscribe(
        (insertedMedlem: Medlem) => {
          if (insertedMedlem) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            //this.besoegForm.form.markAsPristine();
            this.router.navigate(['/besoeg-medlem/'+this.besoeg.id]);
          } else {
            const msg = "Kan ikke gemme besøg !";
            //this.growler.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
        (err: any) => console.log(err)
      );
    } else {
      this.dataService.updateBesoeg(this.besoeg).subscribe(
        (status: boolean) => {
          if (status) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            /*
            this.customerForm.form.markAsPristine();
            this.growler.growl(
              'Operation performed successfully.',
              GrowlerMessageType.Success
            );
            */
             this.router.navigate(['/besoeg']);
          } else {
            const msg = "Unable to update customer";
            // this.growler.growl(msg, GrowlerMessageType.Danger);
            // this.errorMessage = msg;
          }
        },
        (err: any) => console.log(err)
      );
    }
  }
  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/besoeg-medlem/'+this.besoeg.id]);
  }
}