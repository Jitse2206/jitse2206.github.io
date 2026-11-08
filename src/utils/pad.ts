const basis = import.meta.env.BASE_URL.replace(/\/$/, '');

export const pad = (pagina = '') => `${basis}/${pagina}`;

export const huidigePad = (url: URL) => {
  const pathname = url.pathname.startsWith(basis) ? url.pathname.slice(basis.length) : url.pathname;
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};
