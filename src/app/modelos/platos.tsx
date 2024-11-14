export class Plato {
    public codplato: number;
    public nombrePlato: string;
    public precioPlato: string;
    public regionPlato: string;
    public imagenPlato: string;
    public imagenPlatoBase64: string;

    constructor(codp: number, nomb: string, prec: string, regi: string,  imag: string, base: string) {
        this.codplato = codp;
        this.nombrePlato = nomb;
        this.precioPlato = prec;
        this.imagenPlato = imag;
        this.imagenPlatoBase64 = base;
        this.regionPlato = regi;

        
    }
}