// VOY 38

import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers',
   // selector: '[app-servers]', en el .html seria <div app-servers></div>
   // selector: '.app-servers', lo seleccionaria como una clase <div class="app-servers"></div>
   templateUrl: './servers.component.html',
   styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
   allowNewServer = true;
   serverCreationStatus = 'No server was created';
   serverName = '';

   constructor() {}
   ngOnInit(): void {}

   onCreateServer() {
      this.serverCreationStatus =
         'Server was created with name: ' + this.serverName;
   }

   onUpdateServerName(e: Event) {
      // console.log(e); // el single caracter tipado
      // console.log(e.target.value); // todo lo del input
      this.serverName = (e.target as HTMLInputElement).value;
      // como me sale el error Property 'value' does not exist on type 'EventTarget'.
   }
}
