import { Component, OnInit } from '@angular/core';
import {Server} from "../server.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName = '';
  serverContent = '';

  addServer() {
    // this.servers.push(new Server(this.serverName, this.serverContent, false));
    // this.serverName = '';
    // this.serverContent = '';
  }

  addBluePrint() {
    // this.servers.push(new Server(this.serverName, this.serverContent, true));
    // this.serverName = '';
    // this.serverContent = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
