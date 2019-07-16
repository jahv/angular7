import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Server} from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverName = '';
  // serverContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output('sc') serverCreated = new EventEmitter<{Server}>();
  @Output('bpc') blueprintCreated = new EventEmitter<{Server}>();

  addServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(
      {Server: new Server(
        serverNameInput.value,
        this.serverContentInput.nativeElement.value,
        false
      )}
    );
  }

  addBluePrint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {Server: new Server(
        serverNameInput.value,
        this.serverContentInput.nativeElement.value,
        true
      )}
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
