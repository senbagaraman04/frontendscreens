import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCardComponent } from './four-card.component';

describe('FourCardComponent', () => {
  let component: FourCardComponent;
  let fixture: ComponentFixture<FourCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourCardComponent]
    });
    fixture = TestBed.createComponent(FourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
