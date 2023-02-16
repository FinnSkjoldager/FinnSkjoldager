import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-jobsearch-modal',
  templateUrl: './jobsearch-modal.component.html',
  styleUrls: ['./jobsearch-modal.component.css'],
})
export class JobsearchModalComponent implements OnInit {
  form: FormGroup;
  search: string;
  portal: string;
  title: string;
  count: string;
  desc: string;
  url: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<JobsearchModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.search = data.search;
    this.portal = data.portal;
    this.title = data.title;
    this.count = data.count;
    this.desc = data.desc;
    this.url = data.url;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      description: [this.search],
    });
  }
  isNotEmpty(value) {
    return value != '';
  }
  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
