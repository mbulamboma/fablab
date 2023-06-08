import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabcountsComponent } from './fabcounts.component';

describe('FabcountsComponent', () => {
  let component: FabcountsComponent;
  let fixture: ComponentFixture<FabcountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabcountsComponent]
    });
    fixture = TestBed.createComponent(FabcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
