let carrito = "";

let nuevoOperacion = false;

let producto = prompt("Ingrese que producto desea comprar (taza de gato negro, plato mariposas, plato hondo de verduras, taza de flores):");

let cantidad = Number(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));






function hacerCarrito (producto, cantidad) {
    do {
        seleccioneProducto(producto, cantidad)
        nuevaOperacion = confirm("Desea agregar otro producto al carrito?")
        if (nuevaOperacion){
            producto = prompt("Ingrese que producto desea comprar (taza gato negro, plato mariposas, plato hondo de verduras, taza de flores):");
            cantidad = Number(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
        }
    }while(nuevaOperacion)
    console.log("Productos agregados al carrito")
    console.log(carrito)
}





function seleccioneProducto(producto, cantidad){
    
    switch (producto.toLowerCase()) {
        
        case "taza gato negro":
            carrito += `Taza gato negro - Cantidad: ${cantidad} - Precio total: ${4599 * cantidad} pesos\n`
            break;
    
        case "plato mariposas":
            carrito += `Plato mariposas - Cantidad: ${cantidad} - Precio total: ${6900 * cantidad} pesos\n`
            break;

        case "plato hondo de verduras":
            carrito += `Plato hondo de verduras - Cantidad: ${cantidad} - Precio total: ${6900 * cantidad} pesos\n`
            break;

        case "taza de flores":
            carrito += `Taza de flores - Cantidad: ${cantidad} - Precio total: ${4599 * cantidad} pesos\n`
            break;

        default:
            alert("el producto ingresado no existe")
            break;
    }
}

hacerCarrito(producto, cantidad)
seleccioneProducto(producto, cantidad)