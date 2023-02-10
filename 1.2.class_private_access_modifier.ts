// Access Modifier Private pada Typescript
// Sumber materi : https://www.kawankoding.id/typescript-oop-encasulaption-dan-inheritance/

/*
    NOTE :
    Access Modifiers :
    private -> hanya bisa diakses di class itu
    protected -> bisa diakses/diubah nilainya di child class
*/

class Car2{
    private merek: string;
    private pabrikan: string;
    private tahun: number;
    private harga: number;

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
   
    // setter
    setMerek(merekBaru: string): void{
        this.merek = merekBaru;
    }
    setHarga(hargaBaru: number): void{
        this.harga = hargaBaru;
    }
    setPabrikan(pabrikanBaru: string): void{
        this.pabrikan = pabrikanBaru;
    }
    setTahun(tahunBaru: number): void{
        this.tahun = tahunBaru;
    }
        
    // method lain
    jalan(): void{
        console.log(`Mobil ${this.merek} sedang berjalan.`);
    }

    
}

const ferrariRoma = new Car2('Ferrari Roma','Ferrari',2006,130000);
ferrariRoma.jalan();
console.log("------------------------------------------------ 1");

// sekarang kita tidak dapat mengubah atau menghapus property class di atas secara langsung, karena sudah private
// ferrariRoma.harga = 2000000;             akan menghasilkan error
// untuk mengubah nilai kita bisa menggunakan setter
ferrariRoma.setPabrikan('Lamborgini');
console.log(`Mobil ${ferrariRoma.getMerek()} dibuat oleh ${ferrariRoma.getPabrikan()}.`);

