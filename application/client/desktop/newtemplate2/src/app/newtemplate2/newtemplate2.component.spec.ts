import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newtemplate2Component } from './newtemplate2.component';

describe('Newtemplate2Component', () => {
  let component: Newtemplate2Component;
  let fixture: ComponentFixture<Newtemplate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newtemplate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newtemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});