import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { NostrosRoutingModule } from './nostros-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NostrosRoutingModule
  ],
  exports: [NosotrosComponent],
  declarations: [NosotrosComponent]
})
export class NosotrosModule { }
