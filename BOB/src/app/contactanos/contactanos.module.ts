import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos.component';
import { ContactanosRoutingModule } from './contactanos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactanosRoutingModule
  ],
  declarations: [ContactanosComponent]
})
export class ContactanosModule { }
