import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFlowPopupsComponent } from './action-flow-popups.component';

describe('ActionFlowPopupsComponent', () => {
  let component: ActionFlowPopupsComponent;
  let fixture: ComponentFixture<ActionFlowPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionFlowPopupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionFlowPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
