import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteentryComponent } from './deleteentry.component';

describe('DeleteentryComponent', () => {
  let component: DeleteentryComponent;
  let fixture: ComponentFixture<DeleteentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
