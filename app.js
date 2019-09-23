// este programa sirve para aprender a multiplicar
const{ crearArchivo, crearTabla } = require('./multiplicar/multiplicacion');
const argumentos = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base:{
            demand: true,
            alias: 'b'
        }, 
        limite:{
            alias: 'l',
            default: 10
        }

    })
    .command('crear', 'Exporta en un archivo la tabla de multiplicar', {
        base:{
            demand: true,
            alias: 'b'
        }

    })
    .help()
    .argv;

let base = 7;
let comando = argumentos._[0];


switch(comando){
    case 'listar': 
    crearTabla(argumentos.base, argumentos.limite);
  
    break;

    default:
        console.log(`comando no reconocido: ${comando}`);
}