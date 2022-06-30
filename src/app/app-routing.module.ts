import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { UsuarioGuard } from './services/usuario.guard';
import { EventosComponent } from './components/eventos/eventos.component'; 
import { FacturasComponent } from './components/facturas/facturas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
const routes: Routes = [
  { path: 'pagina-inicio', component: PaginaInicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'actualizar-usuario',component: ActualizarUsuarioComponent},
  { path: 'usuarios', component: UsuariosComponent,canActivate:[UsuarioGuard]},
  { path: 'hoteles', component: HotelesComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'factura', component: FacturasComponent},
  { path: 'servicios', component: ServiciosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
