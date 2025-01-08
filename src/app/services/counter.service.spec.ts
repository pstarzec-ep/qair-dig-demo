import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CounterService,
      ],
    });
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('counter', () => {
    it('should get counter', () => {
      // Arrange
      service['_count'] = 3;
      // Act
      // Assert
      expect(service.counter).toEqual(3);
    });
  });

  describe('increment', () => {
    it('should increase counter', () => {
      // Arrange
      // Act
      service.increment();
      // Assert
      expect(service.counter).toEqual(1);
    });
  });

  describe('decrement', () => {
    it('should decrement counter', () => {
      // Arrange
      // Act
      service.decrement();
      // Assert
      expect(service.counter).toEqual(-1);
    });
  });
});
