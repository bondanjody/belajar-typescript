// Inheritance pada Typescript
// Sumber materi : https://www.kawankoding.id/typescript-oop-encasulaption-dan-inheritance/

// parrent class
class Handphone{
    private os: string;
    private koneksi5G: boolean;
    private pabrikan: string;

    constructor(os: string, koneksi5g: boolean, pabrikan: string){
        this.os = os;
        this.koneksi5G = koneksi5g;
        this.pabrikan = pabrikan;
    }

    getAllData(): string{
        return `Operating System : ${this.os}. \nPabrikan : ${this.pabrikan}. \nKoneksi 5G : ${this.koneksi5G}.`
    }
}

// child class
class GalaxyYoung extends Handphone{
    private harga: number;
}

// membuat instance child class
const samsung1 = new GalaxyYoung('Gingerbread',false,'Samsung')
console.log(samsung1.getAllData());

/*
    NOTE : 
    1. Secara default child class akan memiliki constructor dari parrent class
    2. Child class akan memiliki akses ke seluruh property dan method dari parrent class
*/

