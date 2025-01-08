import createSpy = jasmine.createSpy;

export class MockCounterService {
  counter: number = 0;
  increment = createSpy();
  decrement = createSpy();
}
