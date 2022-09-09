

// console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/
//exporta porque en otros ejercicios la usa
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc:'Nokia',
    precio:150
}

const tablet: Producto = {
    desc:'Ipad',
    precio:300
}

//DESESTRUCTURAR PARAMETROS
export function calculaIVA (productos: Producto[]): [number,number]{
    let total = 0;
    //Saca precio del producto
    productos.forEach(({ precio}) => {
        total += precio
    })

    return [total, total*0.15]
}

const articulos = [telefono, tablet]
const iva = calculaIVA(articulos)
// console.log('IVA: ', iva)