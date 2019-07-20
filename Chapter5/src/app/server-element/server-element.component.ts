import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ContentChild, ElementRef, ViewChild
} from '@angular/core';
import {Server} from '../server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('serverElementWithAlias') serverElement: Server;
  @Input() name: string;
  @ViewChild('titleDiv') titleDiv: ElementRef;
  @ContentChild('paragraphContent') paragraphContent: ElementRef;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('titleDiv1: ' + this.titleDiv.nativeElement.textContent);
    console.log('paragraphContent1: ' + this.paragraphContent.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('titleDiv2: ' + this.titleDiv.nativeElement.textContent);
    console.log('paragraphContent2: ' + this.paragraphContent.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('titleDiv3: ' + this.titleDiv.nativeElement.textContent);
    console.log('paragraphContent3: ' + this.paragraphContent.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
