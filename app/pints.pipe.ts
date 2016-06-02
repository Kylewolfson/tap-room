import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "lowPints",
  pure: false
})
export class PintsPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var showLowPints = args[0];
    if (showLowPints === "low") {
      return input.filter(function(keg) {
        return keg.pints <= 10 && keg.pints > 0;
      });
    } else {
    return input.filter(function(keg) {
      return keg.pints > 0;
    });
    }
  }
}
