import { Component, Input, OnInit } from '@angular/core';
import { Redes } from 'src/app/models/Redes.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() redes?: Redes = new Redes(0,"","","","");
  @Input() prsId?: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
