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
    var PintsPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PintsPipe = (function () {
                function PintsPipe() {
                }
                PintsPipe.prototype.transform = function (input, args) {
                    var showLowPints = args[0];
                    if (showLowPints === "low") {
                        return input.filter(function (keg) {
                            return keg.pints <= 10 && keg.pints > 0;
                        });
                    }
                    else {
                        return input.filter(function (keg) {
                            return keg.pints > 0;
                        });
                    }
                };
                PintsPipe = __decorate([
                    core_1.Pipe({
                        name: "lowPints",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], PintsPipe);
                return PintsPipe;
            }());
            exports_1("PintsPipe", PintsPipe);
        }
    }
});
//# sourceMappingURL=pints.pipe.js.map