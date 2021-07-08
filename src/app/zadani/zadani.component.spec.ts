import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZadaniComponent } from './zadani.component';

describe('ZadaniComponent', () => {
  let component: ZadaniComponent;
  let fixture: ComponentFixture<ZadaniComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
