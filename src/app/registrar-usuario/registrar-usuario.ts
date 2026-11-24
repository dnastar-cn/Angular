import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-registrar-usuario',
  styleUrl: './registrar-usuario.css',
  templateUrl: './registrar-usuario.html',
})
export class RegistrarUsuario {
  nombre: string = "";
  apellido: string = "";
  telefono: string = "";
  email: string = "";

  aceptar():void{
   alert("recibido nombre: " + this.nombre);
  }

}


