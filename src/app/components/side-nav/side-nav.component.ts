import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';
import { CounterBtnComponent } from '../counter-btn';

@Component({
  selector: 'qd-side-nav',
  imports: [
    CounterBtnComponent,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class SideNavComponent {

  clickCount: number = 0;

  constructor(private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.clickCount >= activateBackgroundCount;
  }
}
