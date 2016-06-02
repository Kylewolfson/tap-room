System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var KegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KegComponent = (function () {
                function KegComponent() {
                }
                KegComponent.prototype.drink = function () {
                    this.keg.pints -= 1;
                };
                KegComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-display',
                        inputs: ['keg'],
                        template: "\n    <div class=\"row\"><h3><span class=\"col-sm-2\">{{ keg.name }}</span> <span class=\"col-sm-2\">{{ keg.brand }}</span> <span class=\"col-sm-2\">${{ keg.price }}</span> <span class=\"col-sm-2\">{{ keg.ABV }}</span> <span class=\"col-sm-2\">{{ keg.pints }}</span></h3><button (click)=\"drink()\" class=\"btn btn-small\">Pour!</button></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegComponent);
                return KegComponent;
            }());
            exports_1("KegComponent", KegComponent);
        }
    }
});
//# sourceMappingURL=keg.component.js.map