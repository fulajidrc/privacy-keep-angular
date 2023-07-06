import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTInputComponent } from './ng-tinput/ng-tinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgTErrorComponent } from './ng-terror/ng-terror.component';
import { NgTButtonComponent } from './ng-tbutton/ng-tbutton.component';



@NgModule({
  declarations: [
    NgTInputComponent,
    NgTErrorComponent,
    NgTButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    NgTInputComponent,
    NgTErrorComponent,
    NgTButtonComponent
  ]
})
export class SharedModule { }
