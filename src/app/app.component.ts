import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller2';
  propiedadPadre="Variado"; //esta propiedad es leida en el app.componente por la propiedad Hijo

  menus=["Pasta y carne","Pollo frito","Guiso y arroz"]

  anadirMenus(nuevoMenu:string){
    this.menus.push(nuevoMenu);
    this.borrarMenu();

  }

  borrarMenu(){
    let borrar=<HTMLInputElement>document.getElementById('menu-input');
    borrar.value='';

  }


}
