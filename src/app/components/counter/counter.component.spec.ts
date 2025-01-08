import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [
        { provide: ACTIVATE_BACKGROUND_COUNT, useValue: 3 },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
