import { CardProps } from 'types/CardProps';

import image1 from '../assets/series/daredevil.jpg';
import image2 from '../assets/series/loki.jpg';
import image3 from '../assets/series/wandavision.jpg';

const seriesData: Array<CardProps> = [
  {
    image: image1,
    imageAlt: 'Marvel`s Daredevil',
    name: 'Marvel`s Daredevil (2015)',
    description:
      'The first in a planned series of shows detailing the Marvel universe, "Daredevil" follows Matt Murdock, attorney by day and vigilante by night. Blinded in an accident as a child, Murdock uses his heightened senses as Daredevil to fight crime on the streets of New York after the sun goes down.',
    id: 1,
    related: {
      characters: [
        {
          name: 'Daredevil',
          id: 2
        },
        {
          name: 'Spider-Man',
          id: 7
        }
      ],
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity (2013)',
          id: 2
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ]
    }
  },
  {
    image: image2,
    imageAlt: 'Loki',
    name: 'Loki (2021)',
    description:
      'Loki, the God of Mischief, steps out of his brother`s shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."',
    id: 2,
    related: {
      characters: [
        {
          name: 'Daredevil',
          id: 2
        },
        {
          name: 'Spider-Man',
          id: 7
        }
      ],
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity (2013)',
          id: 2
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ]
    }
  },
  {
    image: image3,
    imageAlt: 'Wandavision',
    name: 'Wandavision (2021)',
    description:
      'Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.',
    id: 3,
    related: {
      characters: [
        {
          name: 'Daredevil',
          id: 2
        },
        {
          name: 'Spider-Man',
          id: 7
        }
      ],
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity (2013)',
          id: 2
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ]
    }
  }
];

export default seriesData;
