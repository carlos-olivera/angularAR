import { Component } from '@angular/core';

@Component({
  selector: 'a-root',
  template: `
    <a-pattern-marker model='torus'></a-pattern-marker>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
}
