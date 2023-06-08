import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabheaderComponent } from './fabheader.component';

describe('FabheaderComponent', () => {
  let component: FabheaderComponent;
  let fixture: ComponentFixture<FabheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabheaderComponent]
    });
    fixture = TestBed.createComponent(FabheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
