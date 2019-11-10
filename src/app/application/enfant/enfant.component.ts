import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  @Input() msg :string;
  @Input('msgParent') msg2 :string;
  constructor() { }

  ngOnInit() {
  }

}
