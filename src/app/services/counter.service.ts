import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  public get counter(): number {
    return this._count;
  }

  private _count: number = 0;

  constructor() { }

  increment() {
    this._count++;
  }

  decrement() {
    this._count--;
  }
}
