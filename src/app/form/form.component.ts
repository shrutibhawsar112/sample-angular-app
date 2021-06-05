import { Component, OnInit } from '@angular/core';
import { FormControlName, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditModelComponent } from '../edit-model/edit-model.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  contactData: any = [];
  dataSource = new MatTableDataSource<any>(this.contactData);
  contactForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    status: new FormControl('Active', Validators.required)

  });

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'status', 'edit', 'delete'];

  get f(){
    return this.contactForm.controls;
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  openDialog(element: any): void {
    element["isEditClicked"] = true;
    const dialogRef = this.dialog.open(EditModelComponent, {
      width: '1000px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData(result);
    });
  }

  updateRowData(updatedFormData: any) {
    this.dataSource.data = this.dataSource.data.map(x => {
      if (x.isEditClicked) {
        x.isEditClicked = false;
        return updatedFormData;
      }
      else return x;
    })
    this.dataSource._updateChangeSubscription();
  }

  deleteContact(element: any) {
    this.dataSource.data.splice(this.dataSource.data.findIndex(e => e === element), 1);
    this.dataSource._updateChangeSubscription();
  }
  onSubmit() {
    this.contactForm.value["isEditClicked"] = false;
    this.contactData.push(this.contactForm.value);
    this.dataSource.data = this.contactData;
    this.contactForm.reset(this.contactForm.value);

  }

  ngOnInit(): void {
  }

}
