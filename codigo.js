contenedor = document.querySelector(".contenedor");


function crearLlave(nombre,modelo,precio) {
    img = `<img src="img36.jpg">`;
    nombre = `<h1>${nombre}</h1>`;
    modelo = `<h2>${modelo}</h2>`;
    precio = `<p>Precio: <b>$ ${precio}<b></p>`;
    return [img,nombre,modelo,precio];
}


for (var i = 0; i < 20; i++) {
    let modeloRandom = Math.random()*10000;
    let precioRandom = Math.random()*10 + 30;
    let llave = crearLlave(`llave ${i}`,`Modelo: ${modeloRandom}`,`Precio: ${precioRandom}`);
    
    let div = document.createElement("div");
    div.className.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave;
    contenedor.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
}