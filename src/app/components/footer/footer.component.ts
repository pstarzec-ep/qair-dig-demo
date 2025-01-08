import { Component, Inject } from '@angular/core';
import { BackgroundChangerDirective } from '../../directives';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';
import { CounterBtnComponent } from '../counter-btn';

@Component({
  selector: 'qd-footer',
  imports: [
    CounterBtnComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  hostDirectives: [
    BackgroundChangerDirective,
  ],
})
export class FooterComponent {

  clickCount: number = 0;

  constructor(private backgroundChangerDirective: BackgroundChangerDirective,
              @Inject(ACTIVATE_BACKGROUND_COUNT) readonly activateBackgroundCount: number) {
    this.backgroundChangerDirective.activate = () => this.clickCount >= activateBackgroundCount;
  }

}
