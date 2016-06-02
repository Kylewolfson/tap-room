import { Component } from 'angular2/core';
import { Keg } from './keg.model.ts';


@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <div class="row"><h3><span class="col-sm-2">{{ keg.name }}</span> <span class="col-sm-2">{{ keg.brand }}</span> <span class="col-sm-2">\${{ keg.price }}</span> <span class="col-sm-2">{{ keg.ABV }}</span> <span class="col-sm-2">{{ keg.pints }}</span></h3><button (click)="drink()" class="btn btn-small">Pour!</button></div>
  `
})

export class KegComponent {
  public keg: Keg;
  drink() {
    this.keg.pints -= 1;
  }
}
