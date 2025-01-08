import { Component } from '@angular/core';
import { CounterService } from '../../services';
import { BaseBackgroundChangerComponent } from '../base-background-changer';
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
})
export class SideNavComponent extends BaseBackgroundChangerComponent {
}
