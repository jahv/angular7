import { Component } from '@angular/core';
import {Server} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers: Server[] = [
    new Server('Test Server', 'Test Server', false)
  ];

  addServerOnServer(event: any) {
    this.servers.push(new Server(event.Server.serverName, event.Server.serverContent, false));
  }

  addBluePrintOnServer(event: any) {
    this.servers.push(new Server(event.Server.serverName, event.Server.serverContent, true));
  }

  changeName() {
    this.servers[0].serverName = 'Changed';
  }

  onDestroy() {
    this.servers.splice(0, 1);
  }
}
