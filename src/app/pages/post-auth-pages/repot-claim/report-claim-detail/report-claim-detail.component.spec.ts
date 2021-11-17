import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClaimDetailComponent } from './report-claim-detail.component';

describe('ReportClaimDetailComponent', () => {
  let component: ReportClaimDetailComponent;
  let fixture: ComponentFixture<ReportClaimDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportClaimDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClaimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
