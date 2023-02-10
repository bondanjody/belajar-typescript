var Car = /** @class */ (function () {
    // constructor
    function Car(merek, pabrikan, tahun, harga) {
        this.merek = merek;
        this.pabrikan = pabrikan;
        this.tahun = tahun;
        this.harga = harga;
    }
    // getter
    Car.prototype.getMerek = function () {
        return this.merek;
    };
    Car.prototype.getPabrikan = function () {
        return this.pabrikan;
    };
    Car.prototype.getTahun = function () {
        return this.tahun;
    };
    Car.prototype.getHarga = function () {
        return this.harga;
    };
    Car.prototype.jalan = function () {
        console.log("Mobil ".concat(this.merek, " sedang berjalan."));
    };
    return Car;
}());
// membuat instance
var xenia = new Car('Xenia', 'Daihatsu', 2000, 130000);
console.log("Merek : ".concat(xenia.getMerek()));
xenia.jalan();
console.log("-------------------------------------------------- 1");
// karena semua property masih berakses 'public' maka kita dapat mengubah nilainya
console.log("Harga awal : Rp. ".concat(xenia.getHarga()));
xenia.harga = 200000;
console.log("Harga terbaru : Rp. ".concat(xenia.getHarga()));
console.log("-------------------------------------------------- 2");
