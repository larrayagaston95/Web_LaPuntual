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
                    <a class="navbar-brand d-flex flex-column" href="index.html">
                        <span class="fw-bold fs-3 lh-1">LA PUNTUAL</span>
                        <span class="fs-6 tracking-wide text-secondary">Marmolería</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto fw-bold text-uppercase" style="font-size: 0.9rem; letter-spacing: 1px;">

                            <li class="nav-item">
                                <a class="nav-link active text-danger" href="index.html">HOME</a>
                            </li>
<!-- MATERIALES -->
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMateriales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        MATERIALES
    </a>
    <!-- Nivel 1: Dropdown normal de Bootstrap -->
    <ul class="dropdown-menu bg-dark border-0 shadow py-2" aria-labelledby="navbarDropdownMateriales">

        <!-- Nivel 2: Flyout (Piedras Naturales) -->
        <li class="flyout-parent">
            <a class="dropdown-item text-white d-flex justify-content-between align-items-center" href="#">
                PIEDRAS NATURALES <span class="fs-6 text-secondary">▸</span>
            </a>
            <!-- Nivel 3: Menú lateral -->
            <ul class="flyout-menu bg-dark shadow">
                <li><a class="dropdown-item text-white" href="marmol.html">MÁRMOL</a></li>
                <li><a class="dropdown-item text-white" href="granito.html">GRANITO</a></li>
            </ul>
        </li>

        <!-- Nivel 2: Flyout (Cuarzo) -->
        <li class="flyout-parent">
            <a class="dropdown-item text-white d-flex justify-content-between align-items-center" href="#">
                SUPERFICIES DE CUARZO <span class="fs-6 text-secondary">▸</span>
            </a>
            <ul class="flyout-menu bg-dark shadow">
                <li><a class="dropdown-item text-white" href="silestone.html">SILESTONE</a></li>
                <li><a class="dropdown-item text-white" href="purastone.html">PURASTONE</a></li>
            </ul>
        </li>

        <!-- Nivel 2: Flyout (Sinterizadas) -->
        <li class="flyout-parent">
            <a class="dropdown-item text-white d-flex justify-content-between align-items-center" href="#">
                SUPERFICIES SINTERIZADAS <span class="fs-6 text-secondary">▸</span>
            </a>
            <ul class="flyout-menu bg-dark shadow">
                <li><a class="dropdown-item text-white" href="dekton.html">DEKTON</a></li>
                <li><a class="dropdown-item text-white" href="neolith.html">NEOLITH</a></li>
                <li><a class="dropdown-item text-white" href="prima.html">PRIMA</a></li>
            </ul>
        </li>

        <!-- Enlace simple sin submenú -->
        <li>
            <a class="dropdown-item text-white pt-2" href="cuarcitas.html">CUARCITAS NATURALES</a>
        </li>

    </ul>
</li>

                            <!-- BACHAS -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBachas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BACHAS
                                </a>
                                <ul class="dropdown-menu bg-dark border-0 shadow py-2" aria-labelledby="navbarDropdownBachas">
                                    <li><a class="dropdown-item text-white" href="#">LINEA JOHNSON</a></li>
                                    <li><a class="dropdown-item text-white" href="#">ARMADAS</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">TU MESADA</a>
                            </li>

                            <!-- LA PUNTUAL -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLaPuntual" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    LA PUNTUAL
                                </a>
                                <ul class="dropdown-menu bg-dark border-0 shadow py-2" aria-labelledby="navbarDropdownLaPuntual">
                                    <li><a class="dropdown-item text-white" href="#">NOSOTROS</a></li>
                                    <li><a class="dropdown-item text-white" href="#">TRABAJOS REALIZADOS</a></li>
                                    <li><hr class="dropdown-divider border-secondary my-1"></li>
                                    <li><a class="dropdown-item text-white" href="#">CONTACTO</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
};