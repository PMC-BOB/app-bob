import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorComponent } from './trabajador.component';
import { TrabajadorListComponent } from './trabajador-list/trabajador-list.component';
import { RouterModule } from '@angular/router';



const routes = [{
  path: 'trabajador',
  children: [
    {
      path: 'list',
      children : [
        {
          path: '',
          component: TrabajadorListComponent
        },
        {
          path: ':plomeros',
          component: TrabajadorListComponent
        }
      ]
    }
  ]
}];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
  declarations: []
})
export class TrabajadorRoutingModule { }
