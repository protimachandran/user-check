import { Component, signal } from '@angular/core';
import { UserCheckComponent } from './user/user-check/user-check';

@Component({
  selector: 'app-root',
 imports: [UserCheckComponent],
  template: `<app-user-check></app-user-check>`,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('user-availability-');
}
