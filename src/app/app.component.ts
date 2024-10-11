import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetoUsuarioComponent } from './projeto.usuario/projeto.usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjetoUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ciclo1Murilo';
}
