

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/
//encadenamiento opcional
interface Pasajero {
    nombre:string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre:'paco'
}

const pasajero2: Pasajero = {
    nombre: 'melisa',
    hijos: ['ana', 'gabriel']
}

function imprimeHijos (pasajero : Pasajero):void {
    //es otra forma de usar un if con typescript, podrías usar también un if y funcionaría, la interrogación dice quelo intente, si no puede hace el Or
    const numHijos =  pasajero.hijos?.length || 0
    console.log(numHijos)
}

imprimeHijos(pasajero1)