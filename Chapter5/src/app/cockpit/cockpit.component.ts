import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverName = '';
  serverContent = '';

  @Output('sc') serverCreated = new EventEmitter<{Server}>();
  @Output('bpc') blueprintCreated = new EventEmitter<{Server}>();

  addServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(
      {Server: new Server(serverNameInput.value, this.serverContent, false)}
    );
  }

  addBluePrint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {Server: new Server(serverNameInput.value, this.serverContent, true)}
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
