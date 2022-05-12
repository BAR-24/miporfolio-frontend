import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  acercaDescripcion?:string;
  constructor() { }

  ngOnInit(): void {
    this.acercaDescripcion = "En el año 2014 comence la Carrera de Tecnico"
  }

}
