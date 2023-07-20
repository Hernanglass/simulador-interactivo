let productos = [
    {
        id: 1,
        nombreProducto: "taza gato negro",
        precio: 4900
    },

    {
        id: 2,
        nombreProducto: "plato mariposas",
        precio: 6900
    },
    
    {
        id: 3,
        nombreProducto: "plato hondo de verduras",
        precio: 6900
    },

    {
        id: 4,
        nombreProducto: "taza de flores",
        precio: 4900
    },
]
let carrito = []
let producto;

function buscarProducto () {
    let seleccion = prompt("Ingrese el nombre del producto que desee seleccionar: (taza gato negro, plato mariposas, plato hondo de verduras, taza de flores)");
    producto = productos.find((p) => p.nombreProducto.toLowerCase() == seleccion.toLowerCase());
}


function agregarCarrito () {
   if (producto) {
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));
    carrito.push({
        producto: producto.nombreProducto,
        cantidad: cantidad,
        subtotal: producto.precio * cantidad
    })
   }else[
    alert("El producto seleccionado no existe. Porfavor vuelva a intentarlo")
   ]
}


function confirmarCarrito () {
    while (true) {
        buscarProducto();
        agregarCarrito();

        if(!confirm("desea agregar otro producto al carrito?")){
            break; 
        }
    }
}

function calcularTotal() {
    console.log("Carrito de compras:")
    carrito.forEach((item) => {
        console.log(`- ${item.cantidad} ${item.producto} : ${item.subtotal}`)
    })

    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0)
    console.log(`´total a pagar ${total}`)
}

confirmarCarrito()
calcularTotal()