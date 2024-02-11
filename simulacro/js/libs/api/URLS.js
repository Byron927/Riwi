//Endpoints
//Las exporto para poderlas usar desde el archivo index.js del login o del que la necesite
//Hacemos esto porque en caso de que cambiemos el puerto ya solo tendremos que cambiar...
//...la URL_BASE y no todos uno por uno
export const URL_BASE = "http://localhost:3000";
export const URL_NEWS = `${URL_BASE}/news`;
export const URL_CATEGORIES = `${URL_BASE}/categories`;
export const URL_USERS = `${URL_BASE}/users`;

