// js/app.js
import { Catalogo } from './components/Catalogo.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

/* ==========================================================================
   CONFIGURACIÓN DINÁMICA DE API (LOCAL / PRODUCCIÓN)
   ========================================================================== */
const IS_LOCAL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

const API_URL = IS_LOCAL 
    ? "http://localhost:8081/api" 
   : "http://149.50.141.208:8081/api";

/* ==========================================================================
   INICIALIZACIÓN DE LA APLICACIÓN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', async () => {

    // 1. Inyectamos componentes estructurales
    Header.render('global-nav');
    Footer.render('global-footer');

    // 2. Carga dinámica de materiales desde Spring Boot
    if (document.getElementById('grilla-materiales')) {
        let materiales = [];

        try {
            // Traemos los datos de la API de forma asíncrona
            const response = await fetch(`${API_URL}/materiales`);
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            materiales = await response.json();
            
            // Renderizado inicial
            Catalogo.render(materiales, 'grilla-materiales');

        } catch (error) {
            console.error('Error al conectar con la API de materiales:', error);
            document.getElementById('grilla-materiales').innerHTML = `
                <div class="col-12 text-center text-danger py-5">
                    <p>No se pudieron cargar los materiales. Intente nuevamente más tarde.</p>
                </div>
            `;
        }

        // Configuración de Filtros de Categoría
        const botones = document.querySelectorAll('.btn-filtro');
        botones.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const categoriaSeleccionada = e.target.dataset.categoria;
                
                const filtrados = (categoriaSeleccionada === 'Todos')
                    ? materiales
                    : materiales.filter(m => m.categoria === categoriaSeleccionada);

                Catalogo.render(filtrados, 'grilla-materiales');
            });
        });
    }

    /* ==========================================================================
       MOTOR INTERACTIVE DE SCROLL REVEAL
       ========================================================================== */
    const elementosAObservar = document.querySelectorAll('.reveal-scroll');

    const scrollOpciones = {
        root: null,          // Vigila el viewport del navegador
        rootMargin: '0px',   // Sin márgenes extras
        threshold: 0.15      // Se dispara cuando el 15% del elemento ya es visible
    };

    const scrollObservador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('active');
                observador.unobserve(entrada.target);
            }
        });
    }, scrollOpciones);

    elementosAObservar.forEach(elemento => {
        scrollObservador.observe(elemento);
    });
});