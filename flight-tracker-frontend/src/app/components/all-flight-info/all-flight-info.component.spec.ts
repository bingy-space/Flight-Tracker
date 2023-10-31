import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlightInfoComponent } from './all-flight-info.component';

describe('AllFlightInfoComponent', () => {
  let component: AllFlightInfoComponent;
  let fixture: ComponentFixture<AllFlightInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFlightInfoComponent]
    });
    fixture = TestBed.createComponent(AllFlightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
