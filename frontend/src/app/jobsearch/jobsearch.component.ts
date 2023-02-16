import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilitiesService } from '../data/utilities.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JobsearchModalComponent } from '../jobsearch-modal/jobsearch-modal.component';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css'],
  //styleUrls: [],
})
export class JobsearchComponent implements OnInit {
  private apiServer = this.utilitiesService.getApiUrl();
  dataSource = new MatTableDataSource<Jobsearch>();
  dia1: JobsearchModalComponent;
  dialogRef;
  outTextOn = false;
  outText: string = 'outText';
  querytype = '0';
  jobportal = '0';
  ShowDesc = false;
  isLoading = false;
  totalRows = 0;
  pageSize = 8;
  currentPage = 0;
  pageSizeOptions: number[] = [8, 14, 25, 100];
  displayedColumns: string[] = [
    'search',
    'portal',
    'title',
    'count',
    'desc',
    'company',
    'url',
    'create',
    'update',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private http: HttpClient,
    private utilitiesService: UtilitiesService,
    private router: Router,
    private matDialog: MatDialog,
    private paginatorInt: MatPaginatorIntl
  ) {
    paginatorInt.itemsPerPageLabel = 'Jobs pr. side';
  }
  ngOnInit(): void {
    this.getAll();
  }
  onRowSelected(row: Jobsearch) {
    //this.router.navigate(['/modaldialog1']);
    this.openDialog(row);
  }
  openDialog(row: Jobsearch): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '700px';
    //dialogConfig.height = '700px';
    //dialogConfig.ariaLabel = 'ariaLabel';
    dialogConfig.panelClass = 'jobsearchdialog';
    dialogConfig.data = {
      search: row.search,
      portal: row.portal,
      title: row.title,
      count: row.count,
      desc: row.desc,
      url: row.url
    };
    //this.matDialog.open(Modaldialog1Component, dialogConfig);
    const dialogRef = this.matDialog.open(JobsearchModalComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .subscribe((data) => console.log('Dialog output:', data));
  }
  isNotEmpty(value){
    return value != "";
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  pageChanged(event: PageEvent) {
    /*
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getAll();
    */
  }
  onSelectedQuery(value: string): void {
    //this.outText = value;
    this.querytype = value;
    this.getAll();
  }
  onSelectedJobportal(value: string): void {
    //this.outText = value;
    this.jobportal = value;
    this.getAll();
  }
  onShowDesc(value): void {
    this.outText += 'onHideDesc ' + value;
    this.ShowDesc = value;
    this.getAll();
  }
  getAll() {
    let url = '/api/cronjob/show/' + this.querytype + '/' + this.jobportal;
    console.log('service getAll() start ' + this.apiServer + url);
    const req = this.http.get<Jobsearch[]>(this.apiServer + url);
    req.subscribe((response) => {
      this.outText += ':sub';
      this.dataSource = new MatTableDataSource<Jobsearch>(response);
      this.dataSource.paginator = this.paginator;
      this.sort.disableClear = true;
      this.dataSource.sort = this.sort;
    });
    //this.outText += 'end';
  }
  substr(str) {
    //return str.substring(0, 10);
    return str;
  }
}
class Jobsearch {
  search: string;
  portal: string;
  title: string;
  desc: string;
  company: string;
  url: string;
  count: number;
  created: string;
  updated: string;
}
