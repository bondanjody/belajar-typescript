// Membuat Constructor di child class dan override method dari parrent class
// sumber : https://www.kawankoding.id/typescript-oop-encasulaption-dan-inheritance/ 

// parrent class
class Smartphone{
    private model: string;
    private os: string;
    private koneksi5G: boolean;
    private pabrikan: string;

    constructor(model: string, pabrikan: string, os: string, koneksi5g: boolean){
        this.model = model;
        this.os = os;
        this.koneksi5G = koneksi5g;
        this.pabrikan = pabrikan;
    }

    getAllData(): string{
        return `Model : ${this.model}. \nOperating System : ${this.os}. \nPabrikan : ${this.pabrikan}. \nKoneksi 5G : ${this.koneksi5G}.`
    }
}

// child class
class GalaxyFame extends Smartphone{
    private kameraDepan: boolean;

    // membuat constructor child class
    constructor(os: string, koneksi5G: boolean, kameraDepan: boolean){
        super('Galaxy Fame', 'Samsung', os, koneksi5G)      // memanggil parrent constructor lalu mengisinya, dimana os dan koneksi5G diisi dari nilai yang didapat pada child constructor
        this.kameraDepan = kameraDepan
    }

    // override method getAllData
    getAllData(): string {
        return `${super.getAllData()} \nKamera depan : ${this.kameraDepan}.`        // memanggil nilai parrent lalu menggabungkannya
    }
}

// membuat instance child class
const samsul = new GalaxyFame('Jelly Bean', false, true);
console.log(samsul.getAllData());
