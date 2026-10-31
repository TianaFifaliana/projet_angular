import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExempleVariableClassique } from './components/exemple-variable-classique/exemple-variable-classique';
import { ExempleSignaux } from './components/exemple-signaux/exemple-signaux';
import { ExempleSignaucCrud } from './components/exemple-signauc-crud/exemple-signauc-crud';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ExempleVariableClassique,ExempleSignaux,ExempleSignaucCrud,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet1');
  anarana: string ="Rabenja";
}
