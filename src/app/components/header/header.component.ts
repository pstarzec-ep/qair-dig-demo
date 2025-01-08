import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { CounterService } from '../../services';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';
import { CounterBtnComponent } from '../counter-btn';

@Component({
  selector: 'qd-header',
  imports: [
    CounterBtnComponent,
  ],
  providers: [
    CounterService,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class HeaderComponent {

  constructor(private counterService: CounterService,
              private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.counterService.counter >= activateBackgroundCount;
  }

  increment() {
    this.counterService.increment();
  }
}
