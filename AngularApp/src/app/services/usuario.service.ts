import { Injectable } from '@angular/core';
import { Usuario } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios: Usuario[] = [
    {
      id: 1, nome: 'luiz henrique', login: 'luizniero', senha: 'abc1234'
    }

  ];

  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }

  getUsuarioById(id: number) {
    return this.usuarios.find(u => u.id === id);
  }

  addUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  updateUsuario(usuario: Usuario) {
    const index = this.usuarios.findIndex(u => u.id === usuario.id);
    if (index !== -1) {
      this.usuarios[index] = usuario;
    }
  }
}
