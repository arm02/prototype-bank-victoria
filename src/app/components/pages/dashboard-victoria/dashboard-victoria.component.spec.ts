import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVictoriaComponent } from './dashboard-victoria.component';

describe('DashboardVictoriaComponent', () => {
  let component: DashboardVictoriaComponent;
  let fixture: ComponentFixture<DashboardVictoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardVictoriaComponent]
    });
    fixture = TestBed.createComponent(DashboardVictoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
