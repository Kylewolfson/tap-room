System.register(['angular2/core', './keg-list.component', './keg.model'], function(exports_1, context_1) {
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
    var core_1, keg_list_component_1, keg_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_list_component_1_1) {
                keg_list_component_1 = keg_list_component_1_1;
            },
            function (keg_model_1_1) {
                keg_model_1 = keg_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.kegs = [
                        new keg_model_1.Keg("Black Butte", "Deschutes", 4.99, 6.4, 0),
                        new keg_model_1.Keg("Rogue Ale", "Rogue", 6, 5.5, 1),
                        new keg_model_1.Keg("Piss", "Coors", 2, 3, 2),
                        new keg_model_1.Keg("Blue Ribbon", "Pabst", 1.50, 3.5, 3)
                    ];
                }
                AppComponent.prototype.kegWasSelected = function (clickedKeg) {
                    console.log(clickedKeg);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [keg_list_component_1.KegListComponent],
                        template: "\n    <div class=\"container\">\n      <h1>Tap Room!</h1>\n      <keg-list [kegList]=\"kegs\"\n        (onKegSelect)=\"kegWasSelected($event)\">\n      </keg-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map