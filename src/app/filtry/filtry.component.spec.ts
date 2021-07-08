import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiltryComponent } from './filtry.component';

describe('FiltryComponent', () => {
  let component: FiltryComponent;
  let fixture: ComponentFixture<FiltryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
