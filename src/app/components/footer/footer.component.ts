import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { CounterService } from '../../services';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';
import { CounterBtnComponent } from '../counter-btn';

@Component({
  selector: 'qd-footer',
  imports: [
    CounterBtnComponent,
  ],
  providers: [
    CounterService,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class FooterComponent {

  constructor(private counterService: CounterService,
              private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.counterService.counter >= activateBackgroundCount;
  }

  increment() {
    this.counterService.increment();
  }

}
