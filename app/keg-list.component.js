System.register(['angular2/core', './keg.component', './edit-keg-details.component', './new-keg.component', "./pints.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, keg_component_1, edit_keg_details_component_1, new_keg_component_1, pints_pipe_1;
    var KegListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_component_1_1) {
                keg_component_1 = keg_component_1_1;
            },
            function (edit_keg_details_component_1_1) {
                edit_keg_details_component_1 = edit_keg_details_component_1_1;
            },
            function (new_keg_component_1_1) {
                new_keg_component_1 = new_keg_component_1_1;
            },
            function (pints_pipe_1_1) {
                pints_pipe_1 = pints_pipe_1_1;
            }],
        execute: function() {
            KegListComponent = (function () {
                function KegListComponent() {
                    this.filterPints = "all";
                    this.onKegSelect = new core_1.EventEmitter();
                }
                KegListComponent.prototype.kegClicked = function (clickedKeg) {
                    console.log('child', clickedKeg);
                    this.onKegSelect.emit(clickedKeg);
                };
                KegListComponent.prototype.createKeg = function (newKeg) {
                    if (newKeg.name && newKeg.brand && newKeg.ABV && newKeg.price) {
                        this.kegList.push(newKeg);
                    }
                };
                KegListComponent.prototype.onChange = function (filterOption) {
                    this.filterPints = filterOption;
                    console.log(this.filterPints);
                };
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        outputs: ['onKegSelect'],
                        pipes: [pints_pipe_1.PintsPipe],
                        directives: [keg_component_1.KegComponent, edit_keg_details_component_1.EditKegDetailsComponent, new_keg_component_1.NewKegComponent],
                        templateUrl: 'app/keg-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegListComponent);
                return KegListComponent;
            }());
            exports_1("KegListComponent", KegListComponent);
        }
    }
});
//# sourceMappingURL=keg-list.component.js.map