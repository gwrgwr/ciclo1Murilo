import { Component, OnInit } from '@angular/core';
import { ProjetoUsuarioService } from '../../services/projeto.usuario.service';
import { ProjetoUsuarioEntitie } from '../../entities/projeto.usuario.entitie';

@Component({
  selector: 'app-projeto-usuario',
  standalone: true,
  imports: [],
  templateUrl: './projeto.usuario.component.html',
  styleUrl: './projeto.usuario.component.css'
})
export class ProjetoUsuarioComponent implements OnInit {
  constructor(private projetoUsuarioService : ProjetoUsuarioService) {}

  listaProjetoUsuario! : ProjetoUsuarioEntitie[];

  ngOnInit() {
    this.projetoUsuarioService.getProjetoUsuario().subscribe(data => this.listaProjetoUsuario = data);
    console.log(this.listaProjetoUsuario);
  }
}
