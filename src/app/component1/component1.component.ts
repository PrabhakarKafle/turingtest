import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Input() highlight=false;
  @Output() agreed = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitAgree(){
    this.agreed.emit('Component 1');
  }

}
