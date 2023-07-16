import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideComparisonComponent } from './side-by-side-comparison.component';

describe('SideBySideComparisonComponent', () => {
  let component: SideBySideComparisonComponent;
  let fixture: ComponentFixture<SideBySideComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBySideComparisonComponent]
    });
    fixture = TestBed.createComponent(SideBySideComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
