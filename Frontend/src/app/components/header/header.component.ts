import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() persona: Persona = new Persona(0,"","",0,"","","","",[],[],[],[]);
 

 
  constructor() { }

  ngOnInit(): void {


  }

}
