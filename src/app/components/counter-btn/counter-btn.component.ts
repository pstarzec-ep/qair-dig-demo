import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'qd-counter-btn',
  imports: [],
  templateUrl: './counter-btn.component.html',
  styleUrl: './counter-btn.component.scss',
})
export class CounterBtnComponent {

  @Input() set count(value: number) {
    this.clickCount = value;
  }

  @Output() increment = new EventEmitter<void>();

  clickCount: number = 0;

  onClick() {
    this.increment.emit();
  }
}
