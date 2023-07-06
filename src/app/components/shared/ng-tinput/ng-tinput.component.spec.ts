import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTInputComponent } from './ng-tinput.component';

describe('NgTInputComponent', () => {
  let component: NgTInputComponent;
  let fixture: ComponentFixture<NgTInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
