import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
      <div class="keg-form">
        <h3>Edit Name:</h3>
        <input [(ngModel)]="keg.name" class="input-lg"/>
        <h3>Edit Brand: </h3>
        <input [(ngModel)]="keg.brand" class="input-lg"/>
        <h3>Edit Price: </h3>
        <input [(ngModel)]="keg.price" class="input-lg"/>
        <h3>Edit ABV: </h3>
        <input [(ngModel)]="keg.ABV" class="input-lg"/>
      </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
