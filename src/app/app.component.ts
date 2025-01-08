import { Component } from '@angular/core';
import { CounterComponent } from './components/counter';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import { SideNavComponent } from './components/side-nav';
import { ACTIVATE_BACKGROUND_COUNT } from './vars';

@Component({
  selector: 'qd-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    CounterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: ACTIVATE_BACKGROUND_COUNT, useValue: 10 },
  ],
})
export class AppComponent {
}
