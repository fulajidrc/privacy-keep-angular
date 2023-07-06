import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTErrorComponent } from './ng-terror.component';

describe('NgTErrorComponent', () => {
  let component: NgTErrorComponent;
  let fixture: ComponentFixture<NgTErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
