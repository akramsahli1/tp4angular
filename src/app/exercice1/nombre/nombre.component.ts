import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  @Input()nombre:number;
  @Input()pos:number;
  constructor() { }

  ngOnInit() {
  }

}
