import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() educaciones: Array<Educacion> = new Array<Educacion>();
  constructor() { }

  ngOnInit(): void {
  }

}
