// Sumber materi : https://www.kawankoding.id/typescript-oop-encasulaption-dan-inheritance/
// Praktek menempatkan class di beberapa file (sebagai module) 

export class Motor{
    protected isMatic: boolean
    constructor(apakahMatic: boolean){
        this.isMatic = apakahMatic
    }
}