export const StoneGrid = {
    render: (contenedorId, listaMateriales) => {
        const grilla = document.getElementById(contenedorId);
        if (!grilla) return;

        grilla.innerHTML = '';

        if (!listaMateriales || listaMateriales.length === 0) {
            grilla.innerHTML = `
                <div class="col-12 text-center text-muted my-5 py-4">
                    <p class="fs-5 m-0">No hay muestras disponibles en esta categoría.</p>
                </div>`;
            return;
        }

        listaMateriales.forEach(material => {
            const etiqueta = material.subcategoria ? material.subcategoria : material.categoria;

            grilla.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 stone-card-container">
                    <div class="muestra-stone-card">
                        <div class="stone-image-wrapper">
                            <img src="${material.imagen}" class="stone-img" alt="${material.nombre}" loading="lazy">
                        </div>
                        <div class="stone-info-overlay">
                            <div class="stone-text">
                                <h5 class="fw-bold m-0 text-uppercase">${material.nombre}</h5>
                                <span class="badge rounded-pill mt-1 theme-badge">
                                    ${etiqueta}
                                </span>
                            </div>
                            <button class="btn-stone-view" title="Ver detalle">
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
};