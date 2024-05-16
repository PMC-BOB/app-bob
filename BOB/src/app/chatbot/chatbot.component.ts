import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  botUsername = 'BobFix_bot'; 
  constructor() { }


  openTelegramChat() {
    const chatUrl = `https://t.me/${this.botUsername}`;
    const width = 600;
    const height = 600;

    // Calcula las posiciones x e y para centrar la ventana
    // const y = window.top.outerHeight / 2 + window.top.screenY - (height / 2);
    // const x = window.top.outerWidth / 2 + window.top.screenX - (width / 2);

    // Asegúrate de que la ventana emergente tenga las dimensiones y características deseadas
    window.open(chatUrl, 'Telegram Chat', 'width=500,height=500,left=440,top=170,scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no');

}


  ngOnInit() {
  }

}
