import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';
import { CounterBtnComponent } from '../counter-btn';

@Component({
  selector: 'qd-header',
  imports: [
    CounterBtnComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class HeaderComponent {

  clickCount: number = 0;

  constructor(private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.clickCount >= activateBackgroundCount;
  }
}
