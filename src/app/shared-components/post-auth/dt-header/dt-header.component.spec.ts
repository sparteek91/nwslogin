import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtHeaderComponent } from './dt-header.component';

describe('DtHeaderComponent', () => {
  let component: DtHeaderComponent;
  let fixture: ComponentFixture<DtHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
