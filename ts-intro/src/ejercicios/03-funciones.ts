

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/
function sumar(a:number,b:number): number{
    return a + b;
}

const sumarFlecha = (a: number,b: number): number => {
    return a + b
}

//argumentos opcionales, si base no se pasa es igual a dos
function multiplicar (numero:number, otroNumero?:number, base:number =2): number {
    return numero * base
}


const resultado = multiplicar(10, 30)

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
 
}


//pasar objetos por argumento
function curar(personaje: PersonajeLOR, curarX:number):void{
    personaje.pv += curarX; 
}

const nuevoPersonaje: PersonajeLOR = {
    nombre:'legolas',
    pv: 50,
    mostrarHP() {
        console.log( 'Puntos de vida: ', this.pv)
    }
}

curar(nuevoPersonaje, 20)

nuevoPersonaje.mostrarHP()