import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GConnectSearchRepoComponent } from './g-connect-search-repo.component';

describe('GConnectSearchRepoComponent', () => {
  let component: GConnectSearchRepoComponent;
  let fixture: ComponentFixture<GConnectSearchRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GConnectSearchRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GConnectSearchRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
