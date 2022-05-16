import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  
  },

  {
    path:'habitaciones',
    component:HabitacionesComponent,
  },
  {
    path:'**',
    redirectTo:''
  
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
