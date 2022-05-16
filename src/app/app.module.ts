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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
