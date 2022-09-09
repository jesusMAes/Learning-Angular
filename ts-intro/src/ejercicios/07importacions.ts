import { calculaIVA, Producto } from './06DesestructuraParametros';


console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/



const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio:100
    },
    {
        desc: 'Telefono 2',
        precio:150
    }
]

const [total, isv] = calculaIVA(carritoCompras);

console.log('Total: ', total)
console.log('Iva: ', isv)