import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'turingtest';
  highlight1=false;
  highlight2=false;
  highlight3=false;

  emittedCompo=''
  ngOnInit(){

  }
  OnAgree(event:any){
    this.emittedCompo = 'Aggreed from '+ event;
  }
}
