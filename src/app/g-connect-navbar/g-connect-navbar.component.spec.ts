import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GConnectNavbarComponent } from './g-connect-navbar.component';

describe('GConnectNavbarComponent', () => {
  let component: GConnectNavbarComponent;
  let fixture: ComponentFixture<GConnectNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GConnectNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GConnectNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
