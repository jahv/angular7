import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // By element
  // selector: '[app-servers]', // By attribute
  // selector: '.app-servers', // By class
  template: '<app-server></app-server>' +
    '<app-server></app-server>' +
    '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
