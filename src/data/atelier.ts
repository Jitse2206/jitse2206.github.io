import type { ImageMetadata } from 'astro';
import atelier01 from '../content/atelier/atelier-01.jpg';
import atelier02 from '../content/atelier/atelier-02.jpg';
import atelier03 from '../content/atelier/atelier-03.jpg';

export interface AtelierBeeld {
  src: ImageMetadata;
  alt: string;
  bijschrift: string;
}

export const atelierTekst =
  'Naast school naai ik mijn eigen kleren: kostuums, kleedjes en alles wat ik niet in de winkel vind.';

export const atelier: AtelierBeeld[] = [
  {
    src: atelier01,
    alt: 'Zelfgenaaid lichtgroen satijnen galakleedje met open taille en split, op een paspop met een groen handtasje ervoor',
    bijschrift: 'galakleedje, eigen patroon'
  },
  {
    src: atelier02,
    alt: 'Verkleedkostuum op een paspop: zelfgenaaid rood corset met wit hart, witte bloes, zwarte plooirok met speelkaarten en een kroon',
    bijschrift: 'corset voor een verkleedkostuum'
  },
  {
    src: atelier03,
    alt: 'Zelfgenaaide rok in lichtblauw en grijsblauw met golvende vlakken en een uitsparing, op een paspop',
    bijschrift: 'rok, eigen patroon'
  }
];
