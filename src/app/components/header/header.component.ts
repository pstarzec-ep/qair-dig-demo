import { Component } from '@angular/core';
import { CounterService } from '../../services';
import { BaseBackgroundChangerComponent } from '../base-background-changer';
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
})
export class HeaderComponent extends BaseBackgroundChangerComponent {
}
