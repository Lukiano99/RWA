import { Knjiga } from "./knjige";

const header = document.createElement("h1");
header.innerHTML = "TOP 3 KNJIGE";
document.body.appendChild(header);

let kont = document.createElement("div");
kont.className="kont";
let l1 = document.createElement("label");
l1.className="l";
l1.innerHTML= "NASLOV";
let l2 = document.createElement("label");
l2.className="l";
l2.innerHTML = "GODINA";
let l3 = document.createElement("label");
l3.innerHTML = "BR_STRANICA";
l3.className="l";
kont.appendChild(l1);
kont.appendChild(l2);
kont.appendChild(l3);
document.body.appendChild(kont);

const knjige = [];
knjige.push(new Knjiga("Pojedi tu zabu!",2015, 100));
knjige.push(new Knjiga("Promeni svet!", 2009, 200));
knjige.push(new Knjiga("Milioner iz blata", 2012, 300));

knjige.forEach(element => {
    element.ispisi(document.body);
});

console.log(knjige);