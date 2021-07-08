import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SrovnaniComponent } from './srovnani.component';

describe('SrovnaniComponent', () => {
  let component: SrovnaniComponent;
  let fixture: ComponentFixture<SrovnaniComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SrovnaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrovnaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
