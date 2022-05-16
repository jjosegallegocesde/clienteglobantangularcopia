import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',['$event'])onScrollEvent($event:any){

    //si no han hecho scroll
    if($event.srcElement.scrollingElement.scrollTop<=100){

      let menu:any=document.getElementById("menu")
      //pongalo transparente
      menu.classList.add("menu")
      //quite el color de fondo
      menu.classList.remove("menu2")

    }else{

      let menu:any=document.getElementById("menu")
      //quite el transparente
      menu.classList.remove("menu")
      //ponga el color de fondo
      menu.classList.add("menu2")

    }

  }

}
