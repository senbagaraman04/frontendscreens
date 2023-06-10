import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyloDarkComponent } from './fylo-dark.component';

describe('FyloDarkComponent', () => {
  let component: FyloDarkComponent;
  let fixture: ComponentFixture<FyloDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FyloDarkComponent]
    });
    fixture = TestBed.createComponent(FyloDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
