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
      'The first in a planned series of shows detailing the Marvel universe, "Daredevil" follows Matt Murdock, attorney by day and vigilante by night. Blinded in an accident as a child, Murdock uses his heightened senses as Daredevil to fight crime on the streets of New York after the sun goes down.'
  },
  {
    image: image2,
    imageAlt: 'Loki',
    name: 'Loki (2021)',
    description:
      'Loki, the God of Mischief, steps out of his brother`s shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."'
  },
  {
    image: image3,
    imageAlt: 'Wandavision',
    name: 'Wandavision (2021)',
    description:
      'Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.'
  }
];

export default seriesData;