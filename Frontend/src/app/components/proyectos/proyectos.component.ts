import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input() proyectos: Array<Proyecto> = new Array<Proyecto>(); 
  constructor() { }

  ngOnInit(): void {
  }

}
