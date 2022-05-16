import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormularioreservasComponent } from './formularioreservas/formularioreservas.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservasComponent,
    FormularioreservasComponent,
    MenuComponent,
    FooterComponent,
    HabitacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
