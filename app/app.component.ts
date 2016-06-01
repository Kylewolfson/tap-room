import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Tap Room!</h1>
      <keg-list [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];  // Keg[] (or Array<Keg>) identifies kegs as an array of Keg objects
  constructor(){
    this.kegs = [
      new Keg("Black Butte", "Deschutes", 4.99, 6.4, 0),
      new Keg("Rogue Ale", "Rogue", 6, 5.5, 1),
      new Keg("Piss", "Coors", 2, 3, 2),
      new Keg("Blue Ribbon", "Pabst", 1.50, 3.5, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
