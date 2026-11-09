import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const rollen = ['idee', 'techniek', 'resultaat', 'extra'] as const;

const projecten = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projecten' }),
  schema: ({ image }) => {
    const beeld = z.object({
      src: image(),
      alt: z.string().min(1),
    });
    const blok = z.object({
      titel: z.string(),
      tekst: z.string().optional(),
    });

    return z.object({
      titel: z.string(),
      volgorde: z.number(),
      stap: z.number().optional(),
      jaar: z.string().optional(),
      kort: z.string().optional(),
      beschrijving: z.string().optional(),
      intro: z.string().optional(),
      tijdlijn: z.string().optional(),
      tags: z.array(z.string()).default([]),
      technieken: z.array(z.string()).default([]),
      techniekblokken: z.array(blok).default([]),
      extra: z
        .object({
          titel: z.string(),
          tekst: z.string().optional(),
          blokken: z.array(blok).default([]),
        })
        .optional(),
      briefing: z
        .object({
          vak: z.string(),
          jaar: z.string(),
          duur: z.string(),
          groepsproject: z.string(),
          opdracht: z.string(),
        })
        .optional(),
      teksten: z
        .object({
          briefing: z.string().optional(),
          ideegeneratie: z.string().optional(),
          technieken: z.string().optional(),
          resultaat: z.string().optional(),
          reflectie: z.string().optional(),
        })
        .default({}),
      model: z
        .object({
          bestand: z.string(),
          alt: z.string().min(1),
        })
        .optional(),
      bundel: z
        .object({
          titel: z.string().default('Ontwerpbundel'),
          tekst: z.string().optional(),
          paginas: z.array(image()).min(2),
        })
        .optional(),
      cover: beeld,
      coverOrigineel: beeld,
      beelden: z.array(
        beeld.extend({
          rol: z.enum(rollen),
          titel: z.string().optional(),
          bijschrift: z.string().optional(),
        }),
      ),
    });
  },
});

export const collections = { projecten };
