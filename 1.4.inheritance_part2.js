// Membuat Constructor di child class dan override method dari parrent class
// sumber : https://www.kawankoding.id/typescript-oop-encasulaption-dan-inheritance/ 
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
// parrent class
var Smartphone = /** @class */ (function () {
    function Smartphone(model, pabrikan, os, koneksi5g) {
        this.model = model;
        this.os = os;
        this.koneksi5G = koneksi5g;
        this.pabrikan = pabrikan;
    }
    Smartphone.prototype.getAllData = function () {
        return "Model : ".concat(this.model, ". \nOperating System : ").concat(this.os, ". \nPabrikan : ").concat(this.pabrikan, ". \nKoneksi 5G : ").concat(this.koneksi5G, ".");
    };
    return Smartphone;
}());
// child class
var GalaxyFame = /** @class */ (function (_super) {
    __extends(GalaxyFame, _super);
    // membuat constructor child class
    function GalaxyFame(os, koneksi5G, kameraDepan) {
        var _this = _super.call(this, 'Galaxy Fame', 'Samsung', os, koneksi5G) // memanggil parrent constructor lalu mengisinya, dimana os dan koneksi5G diisi dari nilai yang didapat pada child constructor
         || this;
        _this.kameraDepan = kameraDepan;
        return _this;
    }
    // override method getAllData
    GalaxyFame.prototype.getAllData = function () {
        return "".concat(_super.prototype.getAllData.call(this), " \nKamera depan : ").concat(this.kameraDepan, "."); // memanggil nilai parrent lalu menggabungkannya
    };
    return GalaxyFame;
}(Smartphone));
// membuat instance child class
var samsul = new GalaxyFame('Jelly Bean', false, true);
console.log(samsul.getAllData());
