//alert ("ey!");
let booleano1 =true;
let booleano2 =false;
const booleano3=booleano1 && booleano2
console.log("funciono")
const booleanoAnd = booleano1 || booleano2;
console.log("comparar variable")
const booleanoNot =!booleano1;
const booleanoMix0 =booleano1 >= booleano2;

// operadores en Javascript
const valorDivision= (17/3).toFixed(2)
const valorResto= 17-7
console.log (valorResto)

// 3 logica de programacion variables
const A =9;
const B ="9";
console.log(A==B)
console.log(A===B)
 
const mochila=['ordenador','movil','boli' ]
if (mochila.length>10) {
     console.log("no puedo cargar con tantas cosas");  
} else if (mochila.length>2){
   console.log("que bien voy con mi mochila")
}else{
    console.log("creo que no necesito una mochila")
}
let contarHasta10 = 0;
for(let i=0;i<10; i++){
    contarHasta10++;
    console.log(contarHasta10);
}

const diaFestivo=true;
const siesDiadeFestivo= diaFestivo == true ? console.log("hoy si no trabajo") : console.log("si trabajo");

const arrayBucle=[]
// for(let i=4;i<19; i++){
//     arrayBucle.push(i)
// }
// const d= arrayBucle.reduce();
// console.log(d);
 
const array=  ["con","sofia","aprendiendo","bucles"];
for(let elemento of array){

    console.log("elemento");
}
let i = 0
while (i <20){
    if((i%3)==0){
        console.log("patata");
    }
    i++
}
switch (key){
    case 0-4:
        console.log("insuficiente");
        break;
    case 5-6:
   console.log ("suficiente");  
break;
default:7-8: ("notable");
}
function resta (x, m){
    const res = x - m;
    return res;
}
function duplicaNumero(x){
    const res = x*2;
    return res;
}
