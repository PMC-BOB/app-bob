import { Injectable } from '@angular/core';
import { dataTrabajadores } from './dataTrabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

constructor() { }

  getTrabajadores(){
    return dataTrabajadores;
  }

}
