import { Component, Input } from '@angular/core';

@Component({
  selector: 'NgTError',
  templateUrl: './ng-terror.component.html',
  styleUrls: ['./ng-terror.component.css']
})
export class NgTErrorComponent {
  @Input() error!: string
}
