export class IBesoeg {
    id: number = 0;
    nr: number = 0;
    besogsdato: string = "";
    postnummer: number = 0;
    firmanavn: string = "";
    gpspunkt: string = "";
    adresse: string = "";
    hjemmeside: string = "";
    kontaktperson: string = "";
    mailadresse: string = "";
    telefonnr: string = "";
    uopfordretansog: number = 0;
    ledigtjob: string = "";
    kommentarer: string = "";
    constructor(id: number, firmanavn: string){
        this.id = id;
        this.nr = id;
        this.firmanavn = firmanavn;
    }
    static initBesoeg():IBesoeg {
        let besoeg = new IBesoeg(null,"FINN");
        besoeg.id = 0;
        besoeg.nr = 0;
        besoeg.besogsdato = "1";
        besoeg.postnummer = 0;
        besoeg.firmanavn = "Finn tester";
        besoeg.gpspunkt = "1";
        besoeg.adresse = "1";
        besoeg.hjemmeside = "1";
        besoeg.kontaktperson = "1";
        besoeg.mailadresse = "1";
        besoeg.telefonnr = "1";
        besoeg.uopfordretansog = 0;
        besoeg.ledigtjob = "1";
        besoeg.kommentarer = "1";
        return besoeg;
    }
}
export class IApiResponse {
    status: boolean;
    error?: string;
}
