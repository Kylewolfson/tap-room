import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';
import { AppComponent } from './app.component';

@Component({
  selector: 'new-keg',
  inputs: ['kegList'],
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Tap Keg:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" required #newName>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
      <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
      <input placeholder="ABV" class="col-sm-8 input-lg" #newABV>
      <button (click)="addKeg(newName, newBrand, newPrice, newABV)" class="btn-success btn-lg add-button">Add</button>
    </div>
    `
})
export class NewKegComponent {
  public kegList: Keg[];
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement){
    var name = userName.value;
    var brand = newBrand.value;
    var price = parseInt(newPrice.value);
    var ABV = parseInt(newABV.value);
    var newKeg = new Keg(name, brand, price, ABV, this.kegList.length);
    this.onSubmitNewKeg.emit(newKeg);
    userName.value="";
    newBrand.value="";
    newPrice.value="";
    newABV.value="";
  }
}
