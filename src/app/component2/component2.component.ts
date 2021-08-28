import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() highlight=false;
  @Output() agreed = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitAgree(){
    this.agreed.emit('Component 2');
  }

}
