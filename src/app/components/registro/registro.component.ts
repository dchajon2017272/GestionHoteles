import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  user: Usuario;

  public usuarioModelGet: Usuario;



  constructor(private _usuarioService: UsuariosService,private _router: Router) {
    this.user = new Usuario(
      "",
      "",
      "",
      "",
      "",
      ""
    );
   }

  ngOnInit(): void {
  }

  registro(){
    this._usuarioService.register(this.user).subscribe({
      next: (response:any)=>{
        alert('Usuario creado correctamente, ya puedes iniciar sesión con el correo: '+ response.usuario.email)
        localStorage.setItem("identidad", JSON.stringify(response.usuario))

        this._router.navigate(['/pagina-inicio']);
      },
      error: (error)=>alert(error.error.mensaje),
      
    })
  }

}
