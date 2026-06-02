// js/app.js
import { materiales } from './materiales/materiales.js';
import { Catalogo } from './components/Catalogo.js'; // Levantamos el componente que dibuja tus tarjetas
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inyectamos los componentes organizados
    Header.render('global-nav');
    Footer.render('global-footer');

    // 2. Tu lógica nativa de carga inicial y filtrado del catálogo
    if (document.getElementById('grilla-materiales')) {
        Catalogo.render(materiales, 'grilla-materiales');

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
});

// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    // ... (Tus renderizados de Header, Footer y filtros se quedan arriba igual) ...

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
            // Si el elemento entró en la zona visible de la pantalla
            if (entrada.isIntersecting) {
                entrada.target.classList.add('active');
                // Dejamos de observarlo para que la animación ocurra una sola vez y quede fijo
                observador.unobserve(entrada.target);
            }
        });
    }, scrollOpciones);

    // Activamos la vigilancia en cada etiqueta configurada
    elementosAObservar.forEach(elemento => {
        scrollObservador.observe(elemento);
    });
});