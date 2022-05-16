import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(public peticion:HttpClient) {

    console.log("arrancando el servicio....")

   }
}
