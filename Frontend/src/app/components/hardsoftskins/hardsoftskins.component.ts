import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad.model';

@Component({
  selector: 'app-hardsoftskins',
  templateUrl: './hardsoftskins.component.html',
  styleUrls: ['./hardsoftskins.component.css']
})
export class HardsoftskinsComponent implements OnInit {
  @Input() habilidades: Array<Habilidad> = new Array<Habilidad>();
  constructor() { }

  ngOnInit(): void {
  }

}
