import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightInfoComponent } from './new-flight-info.component';

describe('NewFlightInfoComponent', () => {
  let component: NewFlightInfoComponent;
  let fixture: ComponentFixture<NewFlightInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFlightInfoComponent]
    });
    fixture = TestBed.createComponent(NewFlightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
