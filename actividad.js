// const fs=require('fs');
let multiplicacion=(base,i=10)=>
{
   
for(let i=1; i<=10; i++)
{

    return console.log(`${base} x = ${i}`);
} 
}


// fs.writeFile('multiplicacion.txt',multiplicacion(10,1),(error) => {
//     if (error) throw error ;
//     console.log("tu archivo ha sido creado con exito ");
// });

// let tabla = (base, i ) => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${base} * ${i} = ${base * i}\n`);
//     }
// }
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) {
//         reject(err);
//     } else {
//         resolve(`tabla-${base}.txt`);
//     };