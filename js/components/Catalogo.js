// js/components/Catalogo.js

/* EXPORTACIÓN DEL COMPONENTE:
   Creamos el objeto 'Catalogo' y lo exportamos para que cualquier pantalla 
   (como la home o páginas secundarias) pueda reutilizar el diseño de las tarjetas. */
export const Catalogo = {
    
    /* MÉTODO RENDER:
       Función miembro que recibe la lista de datos a dibujar y el ID del contenedor HTML. */
    render: (lista, contenedorId) => {
        // Buscamos el elemento contenedor físico en la pantalla
        const contenedor = document.getElementById(contenedorId);
        
        // CONTROL DE SEGURIDAD: Si no encuentra el contenedor en la página actual, frena el script sin tirar errores
        if (!contenedor) return;
        
        /* LIMPIEZA DEL CONTENEDOR:
           Vaciamos el contenido previo. Esto es CLAVE para que al filtrar las piedras, 
           las anteriores se borren y la grilla se actualice limpia. */
        contenedor.innerHTML = ""; 

        /* BUCLE DE MAQUETADO:
           Recorremos tus materiales reales para estructurar las columnas de Bootstrap. */
        lista.forEach(item => {
            contenedor.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${item.img}" class="card-img-top p-2" alt="${item.nombre}" style="height: 200px; object-fit: cover; border-radius: 12px;">
                        <div class="card-body text-center d-flex flex-column justify-content-between">
                            <div>
                                <small class="text-uppercase fw-bold text-muted d-block mb-1" style="font-size: 0.75rem;">${item.categoria}</small>
                                <h5 class="card-title fw-bold text-dark mb-3">${item.nombre}</h5>
                            </div>
                            <button class="btn btn-dark btn-sm w-100 mt-2">Consultar</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
};