import { Component } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

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
})
export class AppComponent {
  title = 'qair-dig-demo';
}
