import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTButtonComponent } from './ng-tbutton.component';

describe('NgTButtonComponent', () => {
  let component: NgTButtonComponent;
  let fixture: ComponentFixture<NgTButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
