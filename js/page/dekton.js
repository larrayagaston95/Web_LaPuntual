// js/page/dekton.js

import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inyectamos las barras de interfaz nativas
    Header.render('global-nav');
    Footer.render('global-footer');

    const grilla = document.getElementById('grilla-materiales-dekton');
    const botonesFiltro = document.querySelectorAll('.btn-filter');

    // Variable global en memoria para guardar las piedras que devuelva la base de datos
    let materialesDB = [];

    // URL DE TU API: Mientras pruebes local, usás localhost. Al subirlo ponés la IP de tu Cloud Server.
    const API_URL = 'http://localhost:8080/api/materiales/Dekton';

    // 2. Función encargada de dibujar las tarjetas con el diseño premium minimalista
    const mostrarPiedras = (lista) => {
        if (!grilla) return;
        grilla.innerHTML = '';
        
        if (lista.length === 0) {
            grilla.innerHTML = `
                <div class="col-12 text-center text-muted my-5">
                    <p class="fs-5">Próximamente más ingresos en esta línea de diseño.</p>
                </div>`;
            return;
        }

        lista.forEach(piedra => {
            // Evaluamos la subcategoría para asignar el estilo del badge por Grupo comercial
            const subcatNormalizada = piedra.subcategoria ? piedra.subcategoria.toLowerCase() : '';
            let badgeClass = 'bg-dark-subtle text-dark border-dark-subtle';
            let nombreMostrarBadge = piedra.subcategoria || 'Premium';

            if (subcatNormalizada.includes('grupo 0')) {
                badgeClass = 'bg-danger-subtle text-danger border-danger-subtle';
                nombreMostrarBadge = 'Grupo 0';
            } else if (subcatNormalizada.includes('grupo 1')) {
                badgeClass = 'bg-secondary-subtle text-secondary border-secondary-subtle';
                nombreMostrarBadge = 'Grupo 1';
            } else if (subcatNormalizada.includes('grupo 2')) {
                badgeClass = 'bg-dark-subtle text-dark border-dark-subtle';
                nombreMostrarBadge = 'Grupo 2';
            } else if (subcatNormalizada.includes('grupo 3')) {
                badgeClass = 'bg-info-subtle text-info border-info-subtle'; // Color alternativo sutil
                nombreMostrarBadge = 'Grupo 3';
            } else if (subcatNormalizada.includes('grupo 4')) {
                badgeClass = 'bg-warning-subtle text-warning border-warning-subtle'; // Color oro premium
                nombreMostrarBadge = 'Grupo 4';
            }

            grilla.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 stone-item">
                    <div class="muestra-stone-card">
                        <div class="stone-image-wrapper">
                            <img src="${piedra.imagen}" class="stone-img" alt="${piedra.nombre}">
                        </div>
                        <div class="stone-info-overlay">
                            <div class="stone-text">
                                <h5 class="fw-bold m-0 text-uppercase">${piedra.nombre}</h5>
                                <span class="badge rounded-pill border mt-1 ${badgeClass}" style="font-size: 0.65rem; font-weight: 700; letter-spacing: 0.5px;">
                                    ${nombreMostrarBadge}
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
    };

    // CONEXIÓN EN TIEMPO REAL: Consumimos la base de datos mediante Spring Boot
    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error("Error en la respuesta del servidor");
            return response.json();
        })
        .then(data => {
            materialesDB = data;          // Almacenamos los materiales reales traídos de MySQL
            mostrarPiedras(materialesDB); // Dibujamos el muestrario inicial automáticamente
        })
        .catch(error => {
            console.error("Error conectando a la API de La Puntual:", error);
            grilla.innerHTML = `
                <div class="col-12 text-center text-danger my-5">
                    <p class="fs-5">Hubo un problema al cargar el catálogo. Por favor, intente nuevamente más tarde.</p>
                </div>`;
        });

    // Lógica interactiva de filtrado sobre el array dinámico de la base de datos
    if (botonesFiltro.length > 0) {
        botonesFiltro.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const botonActual = e.target.closest('.btn-filter');
                if (!botonActual) return;

                // Cambiamos estado visual del botón activo
                botonesFiltro.forEach(btn => btn.classList.remove('active'));
                botonActual.classList.add('active');

                // Traemos el atributo del botón HTML (ej: data-filter="Grupo 1")
                const filtroAtributo = botonActual.getAttribute('data-filter').toLowerCase().trim();

                if (filtroAtributo === 'all' || filtroAtributo === 'todos') {
                    mostrarPiedras(materialesDB);
                } else {
                    // Filtramos en la memoria del navegador buscando coincidencias sobre lo que trajo la BD
                    const filtrados = materialesDB.filter(m => {
                        if (!m.subcategoria) return false;
                        
                        const subcatBaseDatos = m.subcategoria.toLowerCase().trim();
                        
                        // Evalúa concordancia flexible entre el botón y la columna de MySQL
                        return subcatBaseDatos.includes(filtroAtributo) || filtroAtributo.includes(subcatBaseDatos);
                    });
                    
                    mostrarPiedras(filtrados);
                }
            });
        });
    }

    // 3. Motor Scroll Reveal para secciones fijas
    const elementosAObservar = document.querySelectorAll('.reveal-scroll');
    const scrollObservador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('active');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });

    elementosAObservar.forEach(el => scrollObservador.observe(el));
});