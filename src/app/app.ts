import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreComponents } from './core/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('header-search-input');
}
