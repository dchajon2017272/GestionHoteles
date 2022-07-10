import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HabitacionesAdminComponent } from './components/habitaciones-admin/habitaciones-admin.component';
import { EventosClienteComponent } from './components/eventos-cliente/eventos-cliente.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosClienteComponent } from './components/servicios-cliente/servicios-cliente.component';
import { SearchPipe } from './pipes/search.pipe';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { FacturaComponent } from './components/factura/factura.component';
import { SearchRoomPipe } from './pipes/search-room.pipe';
import { SearchReservacionPipe } from './pipes/search-reservacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    ActualizarUsuarioComponent,
    UsuariosComponent,
    HotelesComponent,
    EventosComponent,
    HabitacionesComponent,
    HabitacionesAdminComponent,
    EventosClienteComponent,
    ServiciosComponent,
    ServiciosClienteComponent,
    SearchPipe,
    ReservacionesComponent,
    FacturaComponent,
    SearchRoomPipe,
    SearchReservacionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
