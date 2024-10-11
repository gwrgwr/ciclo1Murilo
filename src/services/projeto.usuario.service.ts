import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoUsuarioEntitie } from '../entities/projeto.usuario.entitie';

@Injectable({
  providedIn: 'root'
})
export class ProjetoUsuarioService {

  constructor(private httpClient: HttpClient) {}

  getProjetoUsuario(): Observable<ProjetoUsuarioEntitie[]> {
    return this.httpClient.get<ProjetoUsuarioEntitie[]>('http://academico3.rj.senac.br/projeto-usuario');
  }
}
