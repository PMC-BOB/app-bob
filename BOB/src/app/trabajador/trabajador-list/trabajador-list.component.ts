import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../trabajador';
import { TrabajadorService } from '../trabajador.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-trabajador-list',
  templateUrl: './trabajador-list.component.html',
  styleUrls: ['./trabajador-list.component.css']
})
export class TrabajadorListComponent implements OnInit {

  trabajadores: Array<Trabajador> = [];
  trabajadoresFiltrados: Array<Trabajador> = [];
  electricos: Array<Trabajador> = [];
  electrico: boolean = false;
  plomeros: Array<Trabajador> = [];
  plomero: boolean = false;
  maestros: Array<Trabajador> = [];
  maestro: boolean = false;
  todos: boolean = true;
  filter: string = '';

  constructor(private trabajadorService: TrabajadorService, private router: Router) {
    this.trabajadores = this.trabajadorService.getTrabajadores();
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.handleRouteChange(event.url);
      if (event.url.includes('/trabajador/list/plomeros')) {
        this.plomero = true;
        this.plomeros = this.trabajadores.filter(t => t.especialidad.toLowerCase().includes("plomero"));
      } else if (event.url.includes('/trabajador/list/electricistas')) {
        this.electrico = true;
        this.electricos = this.trabajadores.filter(t => t.especialidad.toLowerCase().includes("electricista"));
      } else if (event.url.includes('/trabajador/list/maestros')) {
        this.maestro = true;
        this.maestros = this.trabajadores.filter(t => t.especialidad.toLowerCase().includes("maestro"));
      }
    });

    
  }

  ngOnInit() {
    this.getTrabajadores();
  }

  getTrabajadores() {
    this.trabajadores = this.trabajadorService.getTrabajadores();
    this.trabajadoresFiltrados = this.trabajadores;
  }

  filtrarTrabajadores() {
    if (this.filter) {
      this.trabajadoresFiltrados = this.trabajadores.filter(t =>
        t.nombre.toLowerCase().includes(this.filter.toLowerCase()));
    } else {
      this.trabajadoresFiltrados = this.trabajadores;
    }
  }

  showAdditionalInfo(index: number) {
    this.trabajadoresFiltrados[index].showInfo = true;
  }

  hideAdditionalInfo(index: number) {
    this.trabajadoresFiltrados[index].showInfo = false;
  }

  handleRouteChange(url: string) {
    
  }

}
