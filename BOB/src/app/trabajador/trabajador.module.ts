import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorComponent } from './trabajador.component';
import { TrabajadorListModule } from './trabajador-list/trabajador-list.module';
import { TrabajadorDetailModule } from './trabajador-detail/trabajador-detail.module';
import { TrabajadorRoutingModule } from './trabajador-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TrabajadorListModule,
    TrabajadorDetailModule,
    TrabajadorRoutingModule,
    FormsModule
  ],
  declarations: [TrabajadorComponent],
  exports: [TrabajadorComponent, TrabajadorListModule, TrabajadorDetailModule]
})
export class TrabajadorModule { }
