import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatentryComponent } from './updatentry.component';

describe('UpdatentryComponent', () => {
  let component: UpdatentryComponent;
  let fixture: ComponentFixture<UpdatentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
