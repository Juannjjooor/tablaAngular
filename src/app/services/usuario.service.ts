import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'jjGonzález', nombre: 'Juan José', apellido: 'González', sexo: 'Varón'},
    {usuario: 'mPérez', nombre: 'Miguel', apellido: 'Pérez', sexo: 'Varón'},
    {usuario: 'wiameM', nombre: 'Wiame', apellido: 'Mohamed', sexo: 'Mujer'},
    {usuario: 'toñiS', nombre: 'Toñi', apellido: 'Sevilla', sexo: 'Mujer'},
    {usuario: 'jPalomo', nombre: 'José', apellido: 'Palomo', sexo: 'Varón'},
    {usuario: 'siMebarak', nombre: 'Shakira Isabel', apellido: 'Mebarak', sexo: 'Mujer'},
    
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);

  }
}
