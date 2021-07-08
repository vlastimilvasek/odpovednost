import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RekapitulaceComponent } from './rekapitulace.component';

describe('RekapitulaceComponent', () => {
  let component: RekapitulaceComponent;
  let fixture: ComponentFixture<RekapitulaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapitulaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapitulaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
