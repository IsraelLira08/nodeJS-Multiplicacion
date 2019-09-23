const fs=require('fs');

let crearTabla = (base, limite=10)=>{
    for(let i = 1; i <= limite; i++){
       console.log (`${base} * ${i} = ${base * i}`);

}
}
let crearArchivo = (base) =>{
    return new Promise( (resolve, reject)=>{ 
        let datos = '';

     for(let i = 1; i <= 10; i++){
     datos = `${base} * ${i} = ${base * i} \n`;
     }

     fs.writeFile(`tabla del ${base}.txt`, datos, (error) =>{
         if(error){
             reject(error);
         }else{
             resolve(`tabla del ${base}.txt`);
         }
         console.log(`El archivo ejemplo.txt ha sido creado con exito`);

        });
    });
}

module.exports={   //Estamos diciendo al proyecto que de este archivo quiero hacer publica esta funcion 
    crearArchivo,
    crearTabla
}