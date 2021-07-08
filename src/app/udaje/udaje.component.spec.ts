import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UdajeComponent } from './udaje.component';

describe('UdajeComponent', () => {
  let component: UdajeComponent;
  let fixture: ComponentFixture<UdajeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UdajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
