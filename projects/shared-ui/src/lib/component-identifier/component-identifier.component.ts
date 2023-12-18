import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-component-identifier',
  templateUrl: './component-identifier.component.html',
  styleUrls: ['./component-identifier.component.css']
})
export class ComponentIdentifierComponent implements OnInit {

  _componentName!:string;
  _bg!:'blue'|'red'|'green';

  @Input()
  set ComponentName(name:string){
    this.ComponentName = name
  }

  @Input()
  set Background(bg:'blue'|'red'|'green'){
    this._bg = bg
  }
  constructor() { }

  ngOnInit(): void {
  }

}
