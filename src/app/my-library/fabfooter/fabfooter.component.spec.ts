import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabfooterComponent } from './fabfooter.component';

describe('FabfooterComponent', () => {
  let component: FabfooterComponent;
  let fixture: ComponentFixture<FabfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabfooterComponent]
    });
    fixture = TestBed.createComponent(FabfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
