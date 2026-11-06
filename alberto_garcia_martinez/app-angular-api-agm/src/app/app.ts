import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuToolbar } from './components/menu-toolbar/menu-toolbar';

@Component({
  imports: [RouterOutlet, MenuToolbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app-angular-api-agm');
}
