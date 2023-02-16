import { Component, OnInit } from '@angular/core';
import { Medlem } from '../medlem';
import { MedlemService } from '../medlem.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MedlemEditComponent } from '../medlem-edit/medlem-edit.component';

@Component({
  selector: 'app-medlem',
  templateUrl: './medlem.component.html',
  styleUrls: ['./medlem.component.css']
})
export class MedlemComponent implements OnInit {
  medlemmer: Medlem[] = [];

  constructor(
    public medlemService: MedlemService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.medlemService.getAll().subscribe((data: Medlem[])=>{
      //console.log("comp.ts retur ok "+data);
      this.medlemmer = data;
    })  
  }
  onRowSelected(row: Medlem) {
    //this.router.navigate(['/modaldialog1']);
    this.openDialog(row);
  }
  openDialog(row: Medlem): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '700px';
    //dialogConfig.height = '700px';
    //dialogConfig.ariaLabel = 'ariaLabel';
    dialogConfig.panelClass = 'jobsearchdialog';
    dialogConfig.data = {
      //search: row.search,
    };
    const dialogRef = this.matDialog.open(MedlemEditComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .subscribe((data) => console.log('Dialog output:', data));
  }
  isNotEmpty(value){
    return value != "";
  }
}
