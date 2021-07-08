import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KloaderComponent } from './kloader.component';

describe('KloaderComponent', () => {
  let component: KloaderComponent;
  let fixture: ComponentFixture<KloaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
