import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.scss']
})
export class ActualizarUsuarioComponent implements OnInit {
  user;
  token;
  public usuarioModelGet: Usuario;
  
  constructor(    public userRest: UsuariosService
    ) { }

  ngOnInit(): void {
    this.user = this.userRest.obtenerIdentidad();
    this.token = this.userRest.obtenerToken();
  }

  updateUser(){
    this.userRest.updateUser(this.user, this.user._id).subscribe({
      next: (response:any)=>{
        localStorage.setItem('identidad', JSON.stringify(this.user));
        alert('Usuario actualizado correctamente')
      },
      error: (err)=> alert(err.error.mensaje)
      
    })
  }


}
