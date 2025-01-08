import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { CounterService } from '../../services';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';

@Component({
  selector: 'qd-base-background-changer',
  imports: [],
  providers: [
    CounterService,
  ],
  template: ``,
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class BaseBackgroundChangerComponent {

  get counter(): number {
    return this.counterService.counter;
  }

  constructor(private counterService: CounterService,
              private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) private readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => {
      return this.counterService.counter >= activateBackgroundCount;
    };
  }

  increment() {
    this.counterService.increment();
  }
}
