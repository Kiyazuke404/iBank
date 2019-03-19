import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LainnyaPage } from './lainnya.page';

describe('LainnyaPage', () => {
  let component: LainnyaPage;
  let fixture: ComponentFixture<LainnyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LainnyaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LainnyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
