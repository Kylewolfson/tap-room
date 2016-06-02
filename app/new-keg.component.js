System.register(['angular2/core', './keg.model'], function(exports_1, context_1) {
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
    var core_1, keg_model_1;
    var NewKegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_model_1_1) {
                keg_model_1 = keg_model_1_1;
            }],
        execute: function() {
            NewKegComponent = (function () {
                function NewKegComponent() {
                    this.onSubmitNewKeg = new core_1.EventEmitter();
                }
                NewKegComponent.prototype.addKeg = function (userName, newBrand, newPrice, newABV) {
                    var name = userName.value;
                    var brand = newBrand.value;
                    var price = parseInt(newPrice.value);
                    var ABV = parseInt(newABV.value);
                    var newKeg = new keg_model_1.Keg(name, brand, price, ABV, this.kegList.length);
                    this.onSubmitNewKeg.emit(newKeg);
                    userName.value = "";
                    newBrand.value = "";
                    newPrice.value = "";
                    newABV.value = "";
                };
                NewKegComponent = __decorate([
                    core_1.Component({
                        selector: 'new-keg',
                        inputs: ['kegList'],
                        outputs: ['onSubmitNewKeg'],
                        template: "\n    <div class=\"keg-form\">\n      <h3>Tap Keg:</h3>\n      <input placeholder=\"Name\" class=\"col-sm-8 input-lg\" required #newName>\n      <input placeholder=\"Brand\" class=\"col-sm-8 input-lg\" #newBrand>\n      <input placeholder=\"Price\" class=\"col-sm-8 input-lg\" #newPrice>\n      <input placeholder=\"ABV\" class=\"col-sm-8 input-lg\" #newABV>\n      <button (click)=\"addKeg(newName, newBrand, newPrice, newABV)\" class=\"btn-success btn-lg add-button\">Add</button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewKegComponent);
                return NewKegComponent;
            }());
            exports_1("NewKegComponent", NewKegComponent);
        }
    }
});
//# sourceMappingURL=new-keg.component.js.map