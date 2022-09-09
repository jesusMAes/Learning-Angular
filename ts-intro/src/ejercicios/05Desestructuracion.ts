

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo:number;
    cancion:string;
    detalles: Detalles
}
interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen:90,
    segundo:36,
    cancion: 'Mess',
    detalles:{
        autor: 'ed sheeran',
        anio:2015
    }
}

//sacar variables con desestructuración
const { volumen, segundo, cancion, detalles} = reproductor
const {autor} =detalles

// console.log(' El volumen actual es: '+volumen)
// console.log(' El segundo actual es: '+segundo)
// console.log(' La canción actual es: '+cancion)
// console.log(' El autor es: '+autor)

//desestructurar arreglos
const dbz: string[] = ['Goku', 'vegeta', 'Trunks']
const [p1, p2, p3] = dbz

console.log('personaje 1: '+p1)
console.log('personaje 2: '+p2)
console.log('personaje 3: '+p3)