import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'NgTInput',
  templateUrl: './ng-tinput.component.html',
  styleUrls: ['./ng-tinput.component.css']
})
export class NgTInputComponent {
  @Input() lable!:string;
  @Input() placeholder:string = '';
  @Input() control!: AbstractControl | null;
  @Input() type:string = 'text'

  get formControl(): FormControl | null {
    return this.control instanceof FormControl ? this.control as FormControl : null;
  }
}
