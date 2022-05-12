import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftskinsComponent } from './hardsoftskins.component';

describe('HardsoftskinsComponent', () => {
  let component: HardsoftskinsComponent;
  let fixture: ComponentFixture<HardsoftskinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftskinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardsoftskinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
