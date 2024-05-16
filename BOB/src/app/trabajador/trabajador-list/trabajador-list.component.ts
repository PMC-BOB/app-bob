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
  trabajadoresFiltrados :Array<Trabajador> = [];
  electricos : Array<Trabajador> = [];
  electrico : Boolean = false;
  plomeros : Array<Trabajador> = [];
  plomero : Boolean = false;
  maestros : Array<Trabajador> = [];
  maestro : Boolean = false;
  todos : Boolean = true;
  filter: string = '';

  constructor(private trabajadorService:TrabajadorService , private router:Router) {
    this.trabajadores = this.trabajadorService.getTrabajadores();
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Verifica la ruta y asigna el color correspondiente
      if (event.url === '/trabajador/list/plomeros') {
        this.plomero = true;
        this.plomeros = this.trabajadores.filter(t => t.nombre.toLowerCase().includes("plomero"));
        this.todos = false;
      } else if (event.url === '/trabajador/list/electricistas') {
        this.electrico = true;
        this.electricos = this.trabajadores.filter(t => t.nombre.toLowerCase().includes("electricista"));
        this.todos = false;
      }
      else if (event.url === '/trabajador/list/maestros') {
        this.maestro = true;
        this.maestros = this.trabajadores.filter(t => t.nombre.toLowerCase().includes("maestro"));
        this.todos = false;
      }
    });
  }


  getTrabajadores(){
    this.trabajadores = this.trabajadorService.getTrabajadores();
    this.trabajadoresFiltrados = this.trabajadores;
  }

  filtrarTrabajadores(){
    if (this.filter) {
      this.trabajadoresFiltrados = this.trabajadores.filter(t =>
        t.nombre.toLowerCase().includes(this.filter.toLowerCase()));
    } else {
      this.trabajadoresFiltrados = this.trabajadores;
    }
  }


    



  ngOnInit() {
    this.getTrabajadores();
    
  }

}
