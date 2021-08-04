import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCallVolumeComponent } from './change-call-volume.component';

describe('ChangeCallVolumeComponent', () => {
  let component: ChangeCallVolumeComponent;
  let fixture: ComponentFixture<ChangeCallVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCallVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCallVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
