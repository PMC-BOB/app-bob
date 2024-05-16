import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot.component';


const routes: Routes = [{
  path: 'chatbot',
  children: [
    {
      path: '',
      component: ChatbotComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ChatbotRoutingModule { }
