import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseVideoEffectsComponent } from './choose-video-effects.component';

describe('ChooseVideoEffectsComponent', () => {
  let component: ChooseVideoEffectsComponent;
  let fixture: ComponentFixture<ChooseVideoEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseVideoEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseVideoEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
