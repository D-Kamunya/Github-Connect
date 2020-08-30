import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GConnectUserComponent } from './g-connect-user.component';

describe('GConnectUserComponent', () => {
  let component: GConnectUserComponent;
  let fixture: ComponentFixture<GConnectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GConnectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GConnectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
