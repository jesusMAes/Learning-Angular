

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/
//array que acepta varios tipos
let habilidades: (boolean | string | number)[] = ['bash', 'counter', 'healing', 100]; 

//declara el tipo de la variable, al añadir ? se indica que es opcional
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
  }
const personaje: Personaje = {
    nombre : 'paco',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo paleta'

console.table(personaje)