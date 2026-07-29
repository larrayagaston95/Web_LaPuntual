import { Catalogo } from '../components/Catalogo.js';

export const setupFilters = (selectorBotones, contenedorId, listaMateriales) => {
    const botones = document.querySelectorAll(selectorBotones);
    if (!botones || botones.length === 0) return;

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const botonActual = e.target.closest('.btn-filter');
            if (!botonActual) return;

            // 1. Manejo visual del estado 'active' en la botonera
            botones.forEach(btn => btn.classList.remove('active'));
            botonActual.classList.add('active');

            const filtroAtributo = botonActual.getAttribute('data-filter').toLowerCase().trim();

            // 2. Filtrado de los datos
            if (filtroAtributo === 'all' || filtroAtributo === 'todos') {
                Catalogo.render(listaMateriales, contenedorId);
            } else {
                const filtrados = listaMateriales.filter(articulo => {
                    // Soporta tanto la relación 'tipo.nombre' como la propiedad 'subcategoria'
                    const subcategoria = articulo.tipo ? articulo.tipo.nombre : (articulo.subcategoria || '');
                    const subcatLwr = subcategoria.toLowerCase().trim();

                    return subcatLwr.includes(filtroAtributo) || filtroAtributo.includes(subcatLwr);
                });

                Catalogo.render(filtrados, contenedorId);
            }
        });
    });
};