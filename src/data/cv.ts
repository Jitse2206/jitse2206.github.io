export interface CvItem {
  periode: string;
  titel: string;
  details: string[];
}

export interface VaardigheidGroep {
  titel: string;
  items: string[];
}

export interface Contact {
  email?: string;
  telefoon?: string;
  linkedin?: string;
}

export const intro =
  'Hallo! Mijn naam is Jitse. Ik zit in mijn 3e bachelor Industrieel ontwerpen: industrieel ingenieur aan UGent campus Kortrijk. In mijn vrije tijd ben ik vice-voorzitter van een vzw. Ik heb horeca-ervaring en doe niets liever dan mensen animeren en ze een goede tijd bezorgen. Ik ben vaak creatief bezig en werk concepten graag uit tot echte producten.';

export const werkervaring: CvItem[] = [
  {
    periode: '2023 tot nu',
    titel: 'Monitor',
    details: [
      'Jongerentravel: zomerkampen in Calella en Malgrat de Mar (12 tot 16 jaar)',
      "Flowtrack: kitchencrew in Platja d'Aro (16+), animatiecrew family in L'Estartit"
    ]
  },
  {
    periode: '2024 tot 2025',
    titel: 'Festicamp',
    details: ['Festivalhost op Tomorrowland']
  },
  {
    periode: '2023 tot 2024',
    titel: 'Brasserie Den Boom',
    details: ['Zaalmedewerker']
  }
];

export const educatie: CvItem[] = [
  {
    periode: '2024 tot nu',
    titel: 'UGent campus Kortrijk',
    details: ['Industriële wetenschappen: ontwerpen']
  },
  {
    periode: '2019 tot 2024',
    titel: 'KVRI Vorselaar',
    details: ["Wetenschappen Wiskunde ('21 tot '24)", "Latijn ('19 tot '21)"]
  }
];

export const vaardigheden: VaardigheidGroep[][] = [
  [
    {
      titel: 'Digitale vaardigheden',
      items: ['Siemens NX: CAD', 'Affinity: Designer, Photo, Publisher', 'Autodesk: VRed', 'Rhino Grasshopper']
    }
  ],
  [
    {
      titel: 'Analoge vaardigheden',
      items: [
        'Gebruikersonderzoek',
        'Probleemoplossend denken',
        'Prototyping',
        'Additive manufacturing',
        'Presenteren',
        'Fotografie',
        'Monitor',
        'Rijbewijs B'
      ]
    }
  ],
  [
    {
      titel: "Hobby's",
      items: ['Naaien', 'Creatief bezig zijn', 'Vice-voorzitter vzw Centaura']
    },
    {
      titel: 'Talen',
      items: ['Nederlands', 'Engels']
    }
  ]
];

export const contact: Contact = {
  email: 'jitse.vanlaer@gmail.com',
  telefoon: '+32 488 15 25 32',
  linkedin: 'https://www.linkedin.com/in/jitse-van-laer'
};
