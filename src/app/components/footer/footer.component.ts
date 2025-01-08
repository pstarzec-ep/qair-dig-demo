import { Component } from '@angular/core';
import { CounterService } from '../../services';
import { BaseBackgroundChangerComponent } from '../base-background-changer';
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
})
export class FooterComponent extends BaseBackgroundChangerComponent {

}
