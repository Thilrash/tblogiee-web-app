import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendPanelComponent } from './trend-panel.component';

describe('TrendPanelComponent', () => {
  let component: TrendPanelComponent;
  let fixture: ComponentFixture<TrendPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
