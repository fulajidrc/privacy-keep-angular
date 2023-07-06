import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'NgTButton',
  templateUrl: './ng-tbutton.component.html',
  styleUrls: ['./ng-tbutton.component.css']
})
export class NgTButtonComponent {
  @Input() class?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() name?: string;
  @Input() buttonType: 'sm' | 'md' | 'lg' = 'md';
  @Input() processing?: boolean;

  //@Output() 
}
