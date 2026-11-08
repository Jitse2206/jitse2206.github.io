import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projecten'>;
type Beeld = Project['data']['beelden'][number];

export interface KaartGroep {
  titel: string;
  tekst?: string;
  hoofdbeeld?: Beeld;
  overigeBeelden: Beeld[];
}

export const groepeer = (blokken: { titel: string; tekst?: string }[], beelden: Beeld[]): KaartGroep[] =>
  blokken.map((blok) => {
    const [hoofdbeeld, ...overigeBeelden] = beelden.filter((beeld) => beeld.titel === blok.titel);
    return { ...blok, hoofdbeeld, overigeBeelden };
  });

export const projectenOpVolgorde = async () =>
  (await getCollection('projecten')).sort((a, b) => a.data.volgorde - b.data.volgorde);

export const projectenOpStap = async () =>
  (await getCollection('projecten')).sort(
    (a, b) => (a.data.stap ?? Infinity) - (b.data.stap ?? Infinity) || a.data.volgorde - b.data.volgorde
  );

export const alineas = (tekst: string) =>
  tekst
    .split(/\n\s*\n/)
    .map((alinea) => alinea.trim())
    .filter(Boolean);

export const metHoofdletter = (tekst: string) => tekst.charAt(0).toUpperCase() + tekst.slice(1);
