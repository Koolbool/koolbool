/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinishSignupComponent } from './finish-signup.component';

describe('FinishSignupComponent', () => {
  let component: FinishSignupComponent;
  let fixture: ComponentFixture<FinishSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
