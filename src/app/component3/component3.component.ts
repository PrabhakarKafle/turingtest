import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  @Input() highlight=false;
  @Output() agreed = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitAgree(){
    this.agreed.emit('Component 3');
  }

}
