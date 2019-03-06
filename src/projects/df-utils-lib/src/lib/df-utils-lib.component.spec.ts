import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFUtilsLibComponent } from './df-utils-lib.component';

describe('DFUtilsLibComponent', () => {
  let component: DFUtilsLibComponent;
  let fixture: ComponentFixture<DFUtilsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFUtilsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFUtilsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
