import { Component, OnInit, ViewChild} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { DataService } from "../data/dataservice";
//import { ModalService, IModalContent } from '../../core/modal/modal.service';
//import { GrowlerService, GrowlerMessageType } from '../../core/growler/growler.service';
import { IBesoeg } from "../data/model";
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
//import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
//import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export
 const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: "cm-besoeg-edit",
  templateUrl: "./besoeg-edit.component.html",
  styleUrls: ["./besoeg-edit.component.css"],
  /*
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ]
  */
})
export class BesoegEditComponent implements OnInit {
  besoeg: IBesoeg = IBesoeg.initBesoeg();
  errorMessage: string = "";
  deleteMessageEnabled: boolean = false;
  operationText = "Indsæt";
  @ViewChild("besoegForm", { static: true }) besoegForm: NgForm = {} as NgForm;

 constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
    //private growler: GrowlerService,
    //private modalService: ModalService,
 )
  {
    
  }

  ngOnInit() {
    // Subscribe to params so if it changes we pick it up. Don't technically need that here
    // since param won't be changing while component is alive.
    // Could use this.route.parent.snapshot.params["id"] to simplify it.
    /*
    console.log("PARAM1 "+this.route.snapshot.paramMap.get("id"));
    this.route.paramMap.subscribe(params => { 
      console.log("PARAM2 "+params.get('id')); 
    });
    */
    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    console.log("EDIT " + id);
    if (id > 0) {
      this.operationText = "Opdater";
      this.getBesoeg(id);
    } 
    if (id == -1){
      this.besoeg = this.dataService.aktBesoeg;
    }
    /*
    this.dataService
      .getStates()
      .subscribe((states: IState[]) => (this.states = states));
*/
  }

  public onCancel = () => {
   // this.location.back();
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

  submit() {
    console.log("submit besoeg.id "+this.besoeg.id);
      if (this.besoeg.id == 0) {
      this.dataService.insertBesoeg(this.besoeg).subscribe(
        (insertedBesoeg: IBesoeg) => {
          if (insertedBesoeg) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            this.besoegForm.form.markAsPristine();
            this.router.navigate(["/besoeg"]);
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
  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteBesoeg(this.besoeg.id).subscribe(
      (status: boolean) => {
        if (status) {
          console.log("READY ROUTE");
          this.router.navigate(['/besoeg']);
        } else {
          this.errorMessage = 'Ikke muligt at slette besøg !';
        }
      },
      (err) => console.log("ERROR = "+err)
    );
  }

  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(["/besoeg"]);
  }
  /*
  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }

    // Dirty show display modal dialog to user to confirm leaving
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave',
    };
    return this.modalService.show(modalContent);
  }
*/
}
