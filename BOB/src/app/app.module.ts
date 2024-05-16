import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NosotrosModule } from './nosotros/nosotros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PrincipalModule,
    TrabajadorModule,
    ChatbotModule,
    NosotrosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
