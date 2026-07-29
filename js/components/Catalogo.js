export const Catalogo = {
    render: (lista, contenedorId) => {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) return;

        contenedor.innerHTML = ""; 

        if (!lista || lista.length === 0) {
            contenedor.innerHTML = `
                <div class="col-12 text-center text-muted my-5 py-4">
                    <p class="fs-5 m-0">No hay muestras disponibles en esta sección.</p>
                </div>`;
            return;
        }

        lista.forEach(articulo => {
            const subcat = articulo.tipo ? articulo.tipo.nombre : (articulo.subcategoria || 'Premium');

            contenedor.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 stone-item">
                    <div class="muestra-stone-card">
                        <div class="stone-image-wrapper">
                            <img src="${articulo.imagen}" class="stone-img" alt="${articulo.nombre}" loading="lazy">
                        </div>
                        <div class="stone-info-overlay">
                            <div class="stone-text">
                                <h5 class="fw-bold text-uppercase m-0">${articulo.nombre}</h5>
                                <span class="badge rounded-pill border mt-1 bg-dark-subtle text-white border-secondary" style="font-size: 0.65rem; font-weight: 700;">
                                    ${subcat}
                                </span>
                            </div>
                            <button class="btn-stone-view" title="Ver detalles">
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
};