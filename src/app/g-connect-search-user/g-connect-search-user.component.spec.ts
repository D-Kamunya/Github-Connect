import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GConnectSearchUserComponent } from './g-connect-search-user.component';

describe('GConnectSearchUserComponent', () => {
  let component: GConnectSearchUserComponent;
  let fixture: ComponentFixture<GConnectSearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GConnectSearchUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GConnectSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
