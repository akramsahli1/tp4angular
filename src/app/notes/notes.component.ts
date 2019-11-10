import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  tab=[15,20,19,8,4,16.5];
  l:number;
  onPremier(){
    console.log(this.tab[0]); 
  }
  onDernier(){
    this.l=this.tab.length;
    console.log(this.tab[this.l-1]);
  }
  constructor() { }

  ngOnInit() {
  }

}
