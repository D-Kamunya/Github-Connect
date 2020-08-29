import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GConnectHomeComponent } from './g-connect-home.component';

describe('GConnectHomeComponent', () => {
  let component: GConnectHomeComponent;
  let fixture: ComponentFixture<GConnectHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GConnectHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GConnectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
