


console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    //  alterEgo:string;
    //  edad:number;
    //  nombreReal:number;
    // al añadir el public en el constructor le dices que cree una variable alterEgo, la inyección de dependencias de angular funciona de esta misma manera
     constructor(
        public alterEgo:string,
        public edad?:number,
        public nombreReal?:string
    ){
        super(nombreReal, 'New york');
    }

}


const ironman = new Heroe('Ironman', 30, 'tony stark');

console.log(ironman)