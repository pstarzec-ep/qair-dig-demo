import { Component } from '@angular/core';
import { CounterService } from '../../services';
import { BaseBackgroundChangerComponent } from '../base-background-changer';
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
})
export class CounterComponent extends BaseBackgroundChangerComponent {
}
