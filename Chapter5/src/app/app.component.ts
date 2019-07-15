import { Component } from '@angular/core';
import {Server} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName = '';
  serverContent = '';
  servers: Server[] = [];


  addServer() {
    this.servers.push(new Server(this.serverName, this.serverContent, false));
    this.serverName = '';
    this.serverContent = '';
  }

  addBluePrint() {
    this.servers.push(new Server(this.serverName, this.serverContent, true));
    this.serverName = '';
    this.serverContent = '';
  }
}
