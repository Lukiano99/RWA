export class Knjiga
{   
    public Naslov:string;
    public Godina:number;
    public Broj_stranica:number;
    public kontejner:HTMLElement;
    constructor(Naslov:string, Godina:number, Broj_stranica:number)
    {
        this.Naslov=Naslov;
        this.Godina=Godina;
        this.Broj_stranica=Broj_stranica;
    }

    showInfo()
    {
       return `Naslov: "${this.Naslov}" , Godina: ${this.Godina}, Broj stranica: ${this.Broj_stranica}`;
    }

    ispisi(host:HTMLElement)
    {

        
        let div = document.createElement("div");
        div.className="mojDiv";
        host.appendChild(div);

        let divN = document.createElement("div");
        divN.className="ispis";
        div.appendChild(divN);
        divN.innerHTML=this.Naslov;


        let divG = document.createElement("div");
        divG.className="ispis";
        div.appendChild(divG);
        divG.innerHTML=this.Godina.toString();


        let divB = document.createElement("div");
        divB.className="ispis";
        div.appendChild(divB);
        divB.innerHTML=this.Broj_stranica.toString();



}
}