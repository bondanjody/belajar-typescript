
// Sumber materi : https://www.kawankoding.id/typescript-oop-class-dan-object/
// Pembuatan Class beserta property serta functionnya

class Car{
    merek: string;
    pabrikan: string;
    tahun: number;
    harga: number;

    // constructor
    constructor(merek: string, pabrikan: string, tahun: number, harga: number){
        this.merek = merek;
        this.pabrikan = pabrikan;
        this.tahun = tahun;
        this.harga = harga;
    }

    // getter
    getMerek(): string {
        return this.merek;
    }
    getPabrikan(): string {
        return this.pabrikan;
    }
    getTahun(): number {
        return this.tahun;
    }
    getHarga(): number{
        return this.harga;
    }
    jalan(): void{
        console.log(`Mobil ${this.merek} sedang berjalan.`);
        
    }
}

// membuat instance
const xenia = new Car('Xenia','Daihatsu',2000,130000)
console.log(`Merek : ${xenia.getMerek()}`);
xenia.jalan();
console.log("-------------------------------------------------- 1");

// karena semua property masih berakses 'public' maka kita dapat mengubah nilainya
console.log(`Harga awal : Rp. ${xenia.getHarga()}`);
xenia.harga = 200000;
console.log(`Harga terbaru : Rp. ${xenia.getHarga()}`);
console.log("-------------------------------------------------- 2");

