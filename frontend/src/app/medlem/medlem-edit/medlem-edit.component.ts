import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-medlem-edit',
  templateUrl: './medlem-edit.component.html',
  styleUrls: ['./medlem-edit.component.css'],
})
export class MedlemEditComponent implements OnInit {
  form: FormGroup;
  search: string;
  portal: string;
  title: string;
  count: string;
  desc: string;
  url: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MedlemEditComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    //this.search = data.search;

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
