import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'qd-side-nav',
  imports: [
    CounterBtnComponent,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

}
