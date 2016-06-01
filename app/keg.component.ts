import { Component } from 'angular2/core';
import { Keg } from './keg.model.ts';


@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <h3>{{ keg.description }}</h3>
  `
})

export class KegComponent {
  public keg: Keg;
}
