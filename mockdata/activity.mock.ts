import { SupportedLanguages } from './../src/shared/interfaces/global.interfaces';

export const MOCK_ACTIVITY_SELECT_TEXT = {
  _id: '9e26ab71-a2d0-43b5-b0fa-38910b7ebe1b',
  timestamps: {
    created: new Date('2020-04-01T00:00:00.000Z'),
    modified: new Date('2020-04-01T00:00:00.000Z'),
  },
  author: 'ef4f0e28-86f8-4d2d-a56a-8b24d3286867',
  type: 'select_text',
  scores: {
    scorePerQuestion: 5,
    timeToComplete: 0,
  },
  language: 'ca' as SupportedLanguages,
  title: `Ho veus clar?`,
  task: `Selecciona totes les paradoxes del text`,
  text: `És quan dormo que hi veig clar
Foll d'una dolça metzina,
Amb perles a cada mà
Visc al cor d'una petxina,
Só la font del comellar
I el jaç de la salvatgina,
-O la lluna que s'afina
En morir carena enllà.
És quan dormo que hi veig clar
Foll d'una dolça metzina.`,
  positions: [
    { start: 0, end: 30, index: 1 },
    { start: 203, end: 233, index: 2 },
  ],
  font: {
    display: true,
    author: 'Joan Vicenç Foix',
    year: 1953,
    work: 'Poemes',
    reference: 'https://ca.wikipedia.org/wiki/Josep_Vicen%C3%A7_Foix_i_Mas',
  },
  keywords: ['paradoxes', 'figures retòriques'],
};

export const MOCK_ACTIVITY_BEST_OPTION = {
  _id: '120460f9-5a23-4050-95a9-4f9d1de87672',
  timestamps: {
    created: new Date('2020-04-01T00:00:00.000Z'),
    modified: new Date('2020-04-01T00:00:00.000Z'),
  },
  author: '47d8ddb3-b36e-4e72-912c-425ef31bd951',
  type: 'best_option',
  scores: {
    scorePerQuestion: 5,
    timeToComplete: 0,
  },
  language: 'ca' as SupportedLanguages,
  title: `Qui l'encerta l'endevina`,
  task: `Tria l'expressió correcta`,
  text: `Duia pantalons curts, és a dir, que no encara els dotze anys.
S'han suspès tots els vols la boira.
Proposem un enfocament les polítiques de mercat.
A la nit podríem fer peix de carn.
plovia, vam jugar el partit.
estalviat, ara no té més diners que el sou.`,
  questions: [
    {
      id: '1',
      position: 38,
      options: [
        { text: 'hauria fet', correct: false, index: 1 },
        { text: 'devia haver fet', correct: true, index: 2 },
      ],
    },
    {
      id: '2',
      position: 88,
      options: [
        { text: 'degut a', correct: false, index: 1 },
        { text: 'a causa de', correct: true, index: 2 },
      ],
    },
    {
      id: '3',
      position: 121,
      options: [
        { text: 'en base a', correct: false, index: 1 },
        { text: 'a partir de', correct: true, index: 2 },
      ],
    },
    {
      id: '4',
      position: 173,
      options: [
        { text: 'enlloc', correct: false, index: 1 },
        { text: 'en lloc', correct: true, index: 2 },
      ],
    },
    {
      id: '5',
      position: 183,
      options: [
        { text: 'Malgrat', correct: false, index: 1 },
        { text: 'Malgrat que', correct: true, index: 2 },
      ],
    },
    {
      id: '6',
      position: 212,
      options: [
        { text: 'Al no haver', correct: false, index: 1 },
        { text: 'Com que no ha', correct: true, index: 2 },
      ],
    },
  ],
  font: {
    display: true,
    author: 'Francesc Esteve i Gómez',
    year: 2011,
    work: 'Gramàtica zero',
    reference: 'https://www.uv.es/llengues/gramaticazero',
  },
  keywords: ['conjuncions'],
};

export const MOCK_ACTIVITY_TRANSFORM_ASPECT = {
  _id: 'ae40070d-6edd-4e95-aab7-8ad5a02ebc8a',
  timestamps: {
    created: new Date('2020-04-01T00:00:00.000Z'),
    modified: new Date('2020-04-01T00:00:00.000Z'),
  },
  author: 'ef4f0e28-86f8-4d2d-a56a-8b24d3286867',
  type: 'transform_aspect',
  scores: {
    scorePerQuestion: 0,
    timeToComplete: 0,
  },
  language: 'ca' as SupportedLanguages,
  title: `La veu passiva`,
  task: `Transforma la oració següent a veu passiva`,
  text: `1. Quan escoltava la ràdio va sentir una forta explosió.
  2. Els dos germans van votar a favor d'aprovar la llei.`,
  questions: [
    {
      start: 3,
      end: 56,
      providedText: 'Quan escoltava la ràdio, va sentir una forta explosió.',
      validSolutions: [
        'Quam hom escoltava la ràdio, es va sentir una forta explosió.',
      ],
    },
    {
      start: 63,
      end: 115,
      providedText: `Els dos germans van votar a favor d'aprovar la llei.`,
      validSolutions: [
        `La llei va ser votada favorablement per els dos germans.`,
      ],
    },
  ],
  font: {
    display: false,
    author: '',
    year: 0,
    work: '',
    reference: '',
  },
  keywords: ['veu passiva'],
};
