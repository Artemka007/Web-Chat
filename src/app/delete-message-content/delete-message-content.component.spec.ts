import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMessageContentComponent } from './delete-message-content.component';

describe('DeleteMessageContentComponent', () => {
  let component: DeleteMessageContentComponent;
  let fixture: ComponentFixture<DeleteMessageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMessageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMessageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
