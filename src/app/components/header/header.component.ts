import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'qd-header',
  imports: [
    CounterBtnComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
