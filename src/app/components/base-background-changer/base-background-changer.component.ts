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

  constructor(protected counterService: CounterService,
              private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.counterService.counter >= activateBackgroundCount;
  }

  increment() {
    this.counterService.increment();
  }
}
