import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <div style="border:1px solid red;margin 5px; ">
    <p>
    child1 working
    </p>
</div>
    <ng-content select="footer"></ng-content>
    <ng-content select="header"></ng-content>
    <ng-content select=".name"></ng-content>
    
  `,
  styles: []
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
