const fs=require('fs');
let datos ='';
let base=5;
let tabla = (base) => {
    for (let i = 1; i <= 10; i++) {
        datos+= ` ${base} * ${i} = ${  base * i}`;
        
        }
    }
    fs.writeFile(`tabla del.txt${base}`, datos, (error)=> {
        if(error) throw error;// comprobacion booleana
      
      })