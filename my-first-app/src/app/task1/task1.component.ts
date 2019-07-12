import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class Task1Component implements OnInit {
  secretPassword = 'tuna';
  showPassword = false;
  counterClicks = 0;
  clickEvents = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.showPassword = !this.showPassword;
    this.counterClicks++;
    this.clickEvents.push(this.counterClicks);
  }

  detailsLabel() {
    return this.showPassword ? 'Hide' : 'Show';
  }

}
