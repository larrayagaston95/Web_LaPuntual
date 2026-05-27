// js/components/Header.js

// js/components/Header.js

// js/components/Header.js

export const Header = {
    render: (contenedorId) => {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) return;

        contenedor.innerHTML = `
            <div class="top-bar text-white py-2 d-none d-md-block">
                <div class="container d-flex justify-content-between align-items-center" style="font-size: 0.85rem;">
                    <div>
                        <span class="me-3"><i class="bi bi-telephone-fill text-secondary"></i> 03571-15667595</span>
                        <span class="me-3"><i class="bi bi-envelope-fill text-secondary"></i> marmolerialapuntual@gmail.com</span>
                        <span><i class="bi bi-geo-alt-fill text-secondary"></i> 9 de Julio 287 Tancacha, Córdoba</span>
                    </div>
                    <div>
                        <a href="#" class="text-white me-2"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-dark main-nav">
                <div class="container">
                    <a class="navbar-brand d-flex flex-column" href="#">
                        <span class="fw-bold fs-3 lh-1">LA PUNTUAL</span>
                        <span class="fs-6 tracking-wide text-secondary">Marmolería</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto fw-bold text-uppercase" style="font-size: 0.9rem; letter-spacing: 1px;">
                            <li class="nav-item"><a class="nav-link active text-danger" href="#">HOME</a></li>
                            <li class="nav-item"><a class="nav-link" href="#catalogo-seccion">MATERIALES</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">BACHAS</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">TU MESADA</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">CONTACTO</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
};