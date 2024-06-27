import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingInputComponent } from './heating-input.component';

describe('HeatingInputComponent', () => {
  let component: HeatingInputComponent;
  let fixture: ComponentFixture<HeatingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatingInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
