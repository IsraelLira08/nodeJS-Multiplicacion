const fs = require('fs');
let tabla = (base) => {
    for (let i = 1; i <= 10; i++) {
        fs.appendFile('tablas.txt', `\n ${base} x ${i} = ${  base * i}`, (error)=> {
                if(error) throw error;// comprobacion booleana
              
              })
        
    }
   
}
tabla(2);