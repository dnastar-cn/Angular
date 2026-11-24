import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrarUsuario } from './registrar-usuario/registrar-usuario';

@Component({
  imports: [RouterOutlet, RegistrarUsuario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-form');
}
