import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactData } from '../form/ContactData';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss']
})
export class EditModelComponent {
 // editContactData:any = [];
  editContactData = this.fb.group({
    firstName: new FormControl(this.data.firstName, Validators.required),
    lastName: new FormControl(this.data.lastName, Validators.required),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(this.data.phoneNumber, Validators.required),
    status: new FormControl(this.data.status, Validators.required)

  });

  get f(){
    return this.editContactData.controls;
  }

  constructor( private fb: FormBuilder,  public dialogRef: MatDialogRef<EditModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactData) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    onSubmit(){
      this.dialogRef.close(this.editContactData.value);
    }
}
