import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Input() experiencias: Array<Experiencia> = new Array<Experiencia>(); 
  constructor() { }

  ngOnInit(): void {
  }

}
