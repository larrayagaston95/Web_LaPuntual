// js/pages/home.js

/* IMPORTACIÓN DEL COMPONENTE VISTA:
   Subimos un nivel de carpeta (..) para ingresar a 'components' y traer el maquetador. */
import { Catalogo } from '../components/Catalogo.js';

/* EXPORTACIÓN DE LA LÓGICA DE LA HOME:
   Esta función inicializa el comportamiento interactivo que pertenece únicamente al Home. */
export const initHome = (datosMateriales) => {
    
    // 1. CARGA INICIAL: Mandamos a renderizar todas las piedras al arrancar
    Catalogo.render(datosMateriales, 'grilla-materiales');

    // 2. ESCUCHADOR DE FILTROS: Capturamos tus botones con la clase '.btn-filtro'
    const botones = document.querySelectorAll('.btn-filtro');

    // 3. ASIGNACIÓN DE CLICS: Recorremos los botones físicos del HTML
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Extraemos la categoría guardada en el atributo data-categoria del botón
            const categoriaSeleccionada = e.target.dataset.categoria;
            
            /* LÓGICA DE FILTRADO FUNCIONAL:
               Mantenemos intacta tu lógica original con el operador ternario. */
            const filtrados = (categoriaSeleccionada === 'Todos')
                ? datosMateriales
                : datosMateriales.filter(m => m.categoria === categoriaSeleccionada);

            // 4. RE-RENDERIZADO: Volvemos a dibujar el contenedor pasándole solo la sublista filtrada
            Catalogo.render(filtrados, 'grilla-materiales');
        });
    });
};