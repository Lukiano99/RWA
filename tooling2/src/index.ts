export async function getRandomNumber() {

    let srecanBroj:number;
    return new Promise<number>((resolve, reject)=>{

        setTimeout(()=>{
            srecanBroj = Math.round(Math.random() * 10);
            if(srecanBroj<0) {
                reject ("Too small number, " + srecanBroj);
            } else {
                resolve(srecanBroj);
            }
         }, Math. random() * 2000);
        });
    }
    
const srBr:number[] = [];
srBr[0] = await getRandomNumber();
console.log(`prvi broj je ${srBr[0]}`);
srBr[1] = await getRandomNumber();
console.log(`drugi broj je ${srBr[1]}`);
srBr[2] = await getRandomNumber();
console.log(`treci broj je ${srBr[2]}`);


console.log("***********");

let n:number;

getRandomNumber()
.then((n)=>{
    console.log("prvi je ",n);
    return getRandomNumber();
})
.then((n)=>{
    console.log("drugi je ",n);
    return getRandomNumber();

})
.then((n)=>{
    console.log("treci je ", n);
});