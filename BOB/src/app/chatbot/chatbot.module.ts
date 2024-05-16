import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotRoutingModule } from './chatbot-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChatbotRoutingModule
  ],
  declarations: [ChatbotComponent],
  exports: [ChatbotComponent]
})
export class ChatbotModule { }
