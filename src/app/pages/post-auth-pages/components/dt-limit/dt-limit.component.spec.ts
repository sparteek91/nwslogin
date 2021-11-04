import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtLimitComponent } from './dt-limit.component';

describe('DtLimitComponent', () => {
  let component: DtLimitComponent;
  let fixture: ComponentFixture<DtLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
