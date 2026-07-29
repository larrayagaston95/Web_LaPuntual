import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { Catalogo } from '../components/Catalogo.js';
import { setupFilters } from '../utils/filterHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    Header.render('global-nav');
    Footer.render('global-footer');

    const API_URL = 'http://localhost:8081/api/articulos/marca/Silestone'; // o la ruta que uses
    const CONTENEDOR_ID = 'grilla-materiales-silestone';
    let materialesDB = [];

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            materialesDB = data;
            
            // Render inicial
            Catalogo.render(materialesDB, CONTENEDOR_ID);
            
            // Eventos de botones
            setupFilters('.btn-filter', CONTENEDOR_ID, materialesDB);
        })
        .catch(error => console.error("Error al cargar Silestone:", error));
});