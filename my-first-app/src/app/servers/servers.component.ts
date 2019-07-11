import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // By element
  // selector: '[app-servers]', // By attribute
  // selector: '.app-servers', // By class
  // template: '<app-server></app-server>' +
  //   '<app-server></app-server>' +
  //   '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
