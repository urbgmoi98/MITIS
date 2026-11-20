/**
 * @module src/utils/sessionStorage
 * @responsibility Persistencia mínima del token y del perfil en sessionStorage.
 * @requirements RF-02, RNF-01
 */
const KEY_TOKEN = 'mitis.token';
const KEY_USER = 'mitis.user';

function safeParse(v) { try { return JSON.parse(v); } catch { return null; } }

export const session = {
  getToken: () => sessionStorage.getItem(KEY_TOKEN),
  setToken: (t) => sessionStorage.setItem(KEY_TOKEN, t),
  getUser: () => safeParse(sessionStorage.getItem(KEY_USER)),
  setUser: (u) => sessionStorage.setItem(KEY_USER, JSON.stringify(u)),
  clear: () => { sessionStorage.removeItem(KEY_TOKEN); sessionStorage.removeItem(KEY_USER); }
};