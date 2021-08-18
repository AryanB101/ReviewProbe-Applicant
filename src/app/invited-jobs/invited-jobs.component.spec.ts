import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedJobsComponent } from './invited-jobs.component';

describe('InvitedJobsComponent', () => {
  let component: InvitedJobsComponent;
  let fixture: ComponentFixture<InvitedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
