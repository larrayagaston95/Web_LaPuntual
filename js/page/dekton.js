// js/page/dekton.js

// Al estar dentro de /page/, subimos un nivel con "../" para acceder a las carpetas vecinas
import { dekton } from '../materiales/materiales-dekton.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inyectamos las barras de interfaz nativas
    Header.render('global-nav');
    Footer.render('global-footer');

    // CORRECCIÓN: Apuntamos exactamente al contenedor dinámico
    const grilla = document.getElementById('grilla-materiales-dekton');
    
    // CORRECCIÓN: Unificamos la clase con tu CSS (.btn-filter)
    const botonesFiltro = document.querySelectorAll('.btn-filter');

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
            // Evaluamos la subcategoría para asignar el estilo del badge
            const subcatNormalizada = piedra.subcategoria ? piedra.subcategoria.toLowerCase() : '';
            let badgeClass = 'bg-dark-subtle text-dark border-dark-subtle';
            let nombreMostrarBadge = piedra.subcategoria || 'Premium';

            if (subcatNormalizada.includes('Grupo 0')) {
                badgeClass = 'bg-danger-subtle text-danger border-danger-subtle';
                nombreMostrarBadge = 'Grupo 0';
            } else if (subcatNormalizada.includes('Grupo 1')) {
                badgeClass = 'bg-secondary-subtle text-secondary border-secondary-subtle';
                nombreMostrarBadge = 'Grupo 1';
            } else if (subcatNormalizada.includes('Grupo 2') || subcatNormalizada.includes('solid')) {
                badgeClass = 'bg-dark-subtle text-dark border-dark-subtle';
                nombreMostrarBadge = 'Grupo 2';
            }else if (subcatNormalizada.includes('Grupo 3') || subcatNormalizada.includes('solid')) {
                badgeClass = 'bg-dark-subtle text-dark border-dark-subtle';
                nombreMostrarBadge = 'Grupo 3';
            } else if (subcatNormalizada.includes('Grupo 4') || subcatNormalizada.includes('solid')) {
                badgeClass = 'bg-dark-subtle text-dark border-dark-subtle';
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

    // Lanzamiento inicial automático de las piedras
    mostrarPiedras(dekton);

    // Lógica interactiva de filtrado sin fallas
    if (botonesFiltro.length > 0) {
        botonesFiltro.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const botonActual = e.target.closest('.btn-filter');
                if (!botonActual) return;

                // Cambiamos estado visual del botón (.active de tu CSS)
                botonesFiltro.forEach(btn => btn.classList.remove('active'));
                botonActual.classList.add('active');

                // Traemos el atributo del HTML, limpio y en minúsculas
                const filtroAtributo = botonActual.getAttribute('data-filter').toLowerCase().trim();

                if (filtroAtributo === 'all' || filtroAtributo === 'todos') {
                    mostrarPiedras(dekton);
                } else {
                    // Filtramos buscando coincidencias parciales con tu archivo de materiales
                    const filtrados = dekton.filter(m => {
                        if (!m.subcategoria) return false;
                        
                        const subcatBaseDatos = m.subcategoria.toLowerCase().trim();
                        
                        // Resuelve el puente: si el botón es "natural" y la base de datos "naturales" -> da TRUE
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