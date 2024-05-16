import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros.component';


const routes : Routes = [
  {
    path: 'nosotros',
    children:[
      {
      path: '',
      component : NosotrosComponent
      },
    ]
  }
]




@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],exports: [RouterModule],
  declarations: []
})
export class NostrosRoutingModule { }
