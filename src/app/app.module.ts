import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { EditModelComponent } from './edit-model/edit-model.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    EditModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
