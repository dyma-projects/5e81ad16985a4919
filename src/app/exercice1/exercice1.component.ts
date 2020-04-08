import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public message  : string;
  public selectedClass : string;

  constructor() { 
    this.message = "Not Clicked";
    this.selectedClass = "beforeClick"; 
  }



  ngOnInit(): void {
  }

  testClick():void {
    this.message ="Clicked";
    this.selectedClass = "afterClick" ;
  }

}
