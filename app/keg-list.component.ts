import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { PintsPipe } from "./pints.pipe";

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [PintsPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  templateUrl: 'app/keg-list.component.html'
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterPints: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void{
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    if (newKeg.name && newKeg.brand && newKeg.ABV && newKeg.price){
      this.kegList.push(
        newKeg
      );
    }
  }
  onChange(filterOption) {
    this.filterPints = filterOption;
  }
}
