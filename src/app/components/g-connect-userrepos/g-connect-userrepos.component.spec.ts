import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GConnectUserreposComponent } from './g-connect-userrepos.component';

describe('GConnectUserreposComponent', () => {
  let component: GConnectUserreposComponent;
  let fixture: ComponentFixture<GConnectUserreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GConnectUserreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GConnectUserreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
