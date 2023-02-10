class Mobil{
    merek: string;
    tahun: number;
    constructor(merek: string, tahun: number){
         this.merek = merek;
         this.tahun = tahun;
    }
    tampilData(): string {
        return `Merek : ${this.merek}. Tahun : ${this.tahun}`;
    }
}

const avanza = new Mobil("Avanza",2012);
console.log(avanza.tampilData());