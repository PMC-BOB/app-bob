import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos.component';

const routes: Routes = [{
  path: 'contacto',
  children: [
    {
      path: '',
      component: ContactanosComponent
    }
  ]
}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class ContactanosRoutingModule { }
