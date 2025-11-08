/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormWriterComponent } from './form-writer.component';

describe('FormWriterComponent', () => {
  let component: FormWriterComponent;
  let fixture: ComponentFixture<FormWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
