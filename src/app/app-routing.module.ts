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
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HabitacionesAdminComponent } from './components/habitaciones-admin/habitaciones-admin.component';
import { EventosClienteComponent } from './components/eventos-cliente/eventos-cliente.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosClienteComponent } from './components/servicios-cliente/servicios-cliente.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { FacturaComponent } from './components/factura/factura.component';

const routes: Routes = [
  { path: 'pagina-inicio', component: PaginaInicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'actualizar-usuario',component: ActualizarUsuarioComponent},
  { path: 'usuarios', component: UsuariosComponent,canActivate:[UsuarioGuard]},
  { path: 'hoteles', component: HotelesComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'habitaciones/:idHotel', component: HabitacionesComponent},
  { path: 'habitaciones-admin', component: HabitacionesAdminComponent},
  { path: 'eventos/:idHotel', component: EventosClienteComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'servicios/:idHotel', component: ServiciosClienteComponent},
  { path: 'reservaciones', component: ReservacionesComponent},
  { path: 'factura', component: FacturaComponent,canActivate:[UsuarioGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
