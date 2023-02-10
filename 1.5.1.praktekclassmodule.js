"use strict";
// lanjutan dari 1.5.0
// di sini melakukan inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Honda = void 0;
var _1_5_0_praktekclassmodule_1 = require("./1.5.0.praktekclassmodule");
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(isMatic, modelMotor, tahunMotor) {
        var _this = _super.call(this, isMatic) || this;
        _this.pabrikan = 'Astra Honda Motor';
        _this.model = modelMotor;
        _this.tahun = tahunMotor;
        return _this;
    }
    Honda.prototype.showData = function () {
        console.log("=== HONDA ONE HEART === \nModel\t: ".concat(this.model, ".\nPabrikan\t: ").concat(this.pabrikan, ".\nTahun\t: ").concat(this.tahun, ".\nMatic\t: ").concat(this.isMatic, "."));
    };
    Honda.prototype.getModel = function () {
        return this.model;
    };
    return Honda;
}(_1_5_0_praktekclassmodule_1.Motor));
exports.Honda = Honda;
