


console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

//trabajando con genericos

function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo')
let soyNumero = queTipoSoy(200)
let soyArray = queTipoSoy([1,2,3])

let soyExplicito = queTipoSoy<number>(2)