import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorListComponent } from './trabajador-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TrabajadorListComponent]
})
export class TrabajadorListModule { }
