import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { PrincipalRoutingModule } from './principal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  declarations: [PrincipalComponent],
  exports: [PrincipalComponent]
})
export class PrincipalModule { }
