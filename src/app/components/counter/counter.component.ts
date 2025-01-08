import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { CounterService } from '../../services';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';
import { CounterBtnComponent } from '../counter-btn';

@Component({
  selector: 'qd-counter',
  imports: [
    CounterBtnComponent,
  ],
  providers: [
    CounterService,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class CounterComponent {

  get counter(): number {
    return this.counterService.counter;
  }

  constructor(private counterService: CounterService,
              private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.counterService.counter >= activateBackgroundCount;
  }

  increment() {
    this.counterService.increment();
  }
}
