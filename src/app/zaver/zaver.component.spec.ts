import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZaverComponent } from './zaver.component';

describe('ZaverComponent', () => {
  let component: ZaverComponent;
  let fixture: ComponentFixture<ZaverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
