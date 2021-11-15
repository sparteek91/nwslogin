import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotClaimComponent } from './repot-claim.component';

describe('RepotClaimComponent', () => {
  let component: RepotClaimComponent;
  let fixture: ComponentFixture<RepotClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepotClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepotClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
