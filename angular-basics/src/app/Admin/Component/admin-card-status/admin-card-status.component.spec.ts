import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCardStatusComponent } from './admin-card-status.component';

describe('AdminCardStatusComponent', () => {
  let component: AdminCardStatusComponent;
  let fixture: ComponentFixture<AdminCardStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCardStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
