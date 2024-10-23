let conteo = 0;
let resultado = 0;

function agregarCosas(nombre, descripcion, precio, imagen){
    if (conteo === 0){
        document.getElementById('producto').innerHTML = ``;
    }
    
    const productoId = `producto-${conteo}`; // ID único para cada producto
    
    document.getElementById('producto').innerHTML += `
        <div id="${productoId}" class="super-productico"> 
            <div onclick="Mostrar('${nombre}','${descripcion}','${precio}','${imagen}')" class="productico"> 
                <img src="${imagen}" alt="">
                <h2>${nombre}</h2>
                <h3>${descripcion}</h3>
                <p>${precio}</p>
            </div>
            <button id="btncerrar-${conteo}" onclick="cerrarr('${productoId}', ${precio})">Eliminar</button>
        </div>
    `;
    
    resultado = parseFloat(resultado) + parseFloat(precio);
    document.getElementById("total").textContent = resultado.toFixed(2);  // Mostrar el total con 2 decimales
    conteo++;
    document.getElementById('carrito').textContent = conteo;
}

function vaciar(){
    document.getElementById('producto').innerHTML = ``;
    document.getElementById('carrito').textContent = 0;
    document.getElementById("total").textContent = "0.00";
    document.querySelector('.modal').style.display = "none";
    conteo = 0;
    resultado = 0;
}

function Mostrar(nombre, descripcion, precio, imagen) {
    document.querySelector('.modal-content').innerHTML = `
        <p class="close" onclick="closeModal()">&times;</p>
        <img src="${imagen}" alt="">
        <h2>${nombre}</h2>
        <h3>${descripcion}</h3>
        <p>${precio}</p>
    `;
    document.querySelector('.modal').style.display = "flex";
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

function cerrarr(productoId, precio) {
    // Eliminar el producto específico
    document.getElementById(productoId).remove();
    
    // Actualizar el conteo y el total
    conteo--;
    resultado = parseFloat(resultado) - parseFloat(precio);
    
    document.getElementById('carrito').textContent = conteo;
    document.getElementById("total").textContent = resultado.toFixed(2);
    
    // Si no hay productos, restablecer el contenido
    if (conteo === 0) {
        vaciar();
    }
}



