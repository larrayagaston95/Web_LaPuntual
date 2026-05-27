// js/components/Footer.js

export const Footer = {
    render: (contenedorId) => {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) return;

        contenedor.innerHTML = `
            <footer class="bg-dark text-white pt-5 pb-3">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-12 col-md-4">
                            <h5 class="fw-bold text-uppercase mb-3">La Puntual SRL</h5>
                            <p class="text-white-50 small">Especialistas en superficies de alta gama. Trabajamos granitos, Silestone, Dekton y Purestone con precisión y calidad corporativa.</p>
                        </div>
                        <div class="col-12 col-md-4">
                            <h5 class="fw-bold text-uppercase mb-3">Enlaces Rápidos</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Inicio</a></li>
                                <li class="mb-2"><a href="#catalogo-seccion" class="text-white-50 text-decoration-none">Nuestro Catálogo</a></li>
                                <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Trabajos Realizados</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-4">
                            <h5 class="fw-bold text-uppercase mb-3">Contacto</h5>
                            <p class="text-white-50 small mb-2"><i class="bi bi-geo-alt me-2"></i>Ruta Nacional 158, Hernando, Córdoba</p>
                            <p class="text-white-50 small mb-2"><i class="bi bi-telephone me-2"></i>+54 353 4XXX-XXXX</p>
                        </div>
                    </div>
                    <hr class="border-secondary my-4">
                    <div class="row">
                        <div class="col text-center">
                            <p class="text-white-50 small mb-0">&copy; 2026 La Puntual SRL. Todos los derechos reservados. BY LARRAYA GASTON</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
};