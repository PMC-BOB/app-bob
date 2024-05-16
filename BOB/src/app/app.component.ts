import { Component } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BOB';
  backgroundColor : string = 'rgba(250, 248, 244, 1)';
  icono : string = 'assets/iconos/icono_bob.png';
  color : string = 'black';
  padding : string = '10px';
  tamanio : string = '100px';

  constructor(private router:Router){

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Verifica la ruta y asigna el color correspondiente
      if (event.url === '/principal/home' || event.url === '/nosotros') {
        this.backgroundColor = 'rgba(250, 248, 244, 1)';
        this.icono = 'assets/iconos/icono_bob.png';
        this.color = 'black';
        this.padding = '45px';
        this.tamanio  = '100px';
      } else if (event.url === '/trabajador/list' || event.url === '/trabajador/list/plomeros' || event.url === '/trabajador/list/electricistas' || event.url === '/trabajador/list/maestros' || event.url == '/chatbot') {
        this.backgroundColor = 'rgba(13, 40, 68, 1)';
        this.icono = 'assets/iconos/icono-pie.png';
        this.color = 'white';
        this.padding =  '0px';
        this.tamanio  = '80px';

      }
    });

  }

}
