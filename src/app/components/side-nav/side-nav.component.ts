import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { CounterService } from '../../services';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';
import { CounterBtnComponent } from '../counter-btn';

@Component({
  selector: 'qd-side-nav',
  imports: [
    CounterBtnComponent,
  ],
  providers: [
    CounterService,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class SideNavComponent {

  constructor(private counterService: CounterService,
              private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.counterService.counter >= activateBackgroundCount;
  }

  increment() {
    this.counterService.increment();
  }
}
