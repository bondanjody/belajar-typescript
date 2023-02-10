// lanjutan dari 1.5.0
// di sini melakukan inheritance

import { Motor } from "./1.5.0.praktekclassmodule";

export class Honda extends Motor{
    private model: string
    protected tahun: number
    private pabrikan: string = 'Astra Honda Motor'

    constructor(isMatic: boolean, modelMotor: string, tahunMotor: number){
        super(isMatic)
        this.model = modelMotor
        this.tahun = tahunMotor
    }

    showData(): void{
        console.log(`=== HONDA ONE HEART === \nModel\t: ${this.model}.\nPabrikan\t: ${this.pabrikan}.\nTahun\t: ${this.tahun}.\nMatic\t: ${this.isMatic}.`);
    }

}