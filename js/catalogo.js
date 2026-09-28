import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Catalogo } from './components/Catalogo.js';
import { setupFilters } from './utils/filterHandler.js';
import { BASE_API_URL } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    Header.render('global-nav');
    Footer.render('global-footer');

    const marca = document.body.dataset.marca;
    if (!marca) {
        console.error("No se definió el atributo data-marca en el body");
        return;
    }

    const API_URL = `${BASE_API_URL}/articulos/marca/${marca}`;
    const CONTENEDOR_ID = `grilla-materiales`;
    let materialesDB = [];

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            materialesDB = data;
            Catalogo.render(materialesDB, CONTENEDOR_ID);
            setupFilters('.btn-filter', CONTENEDOR_ID, materialesDB);
        })
        .catch(error => console.error(`Error cargando ${marca}:`, error));
});
