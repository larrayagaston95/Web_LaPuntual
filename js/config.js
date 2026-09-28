// js/config.js
const IS_LOCAL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

// Si es local usa localhost, si está en el servidor usa la IP del VPS
//export const BASE_API_URL = IS_LOCAL 
///   ? "http://localhost:8081/api" 
//   : "http://149.50.141.208:8081/api";

//export const BASE_API_URL = 'http://149.50.141.208/api';

//export const BASE_API_URL = 'http://v2.lapuntualsrl.com.ar/api';

export const BASE_API_URL = 'http://localhost:8080/api';