import { CardProps } from 'types/CardProps';

import image1 from '../assets/comics/amazingFantasy.jpg';
import image2 from '../assets/comics/infinity.jpg';
import image3 from '../assets/comics/infinityGauntler.jpg';

const comicsData: Array<CardProps> = [
  {
    image: image1,
    imageAlt: 'Amazing Fantazy',
    name: 'Amazing Fantazy (1962)',
    description:
      'The First Appearance of the Amazing Spider-Man! When young Peter Parker gains remarkable abilities from a radioactive spider, he must step up and try to become a hero — while also dealing with the fantastic pressures of an everyday teenager! For with great power, there must also come great responsibility!'
  },
  {
    image: image2,
    imageAlt: 'Infinity',
    name: 'Infinity (2013)',
    description:
      "The oversized kickoff to the year's most anticipate Blockbuster summer event, chaning the way you view the Marvel Universe! The outbreak of war on two fronts: Earth and Space, with our heroes torn between them. The world-shattering return of Thanos! Includes material from FREE COMIC BOOK DAY: INFINITY."
  },
  {
    image: image3,
    imageAlt: 'Infinity Gauntlet',
    name: 'Infinity Gauntlet (1991)',
    description:
      "One of the biggest events ever to hit the Marvel Universe! For Thanos, the Infinity Gauntlet was the ultimate prize to be coveted above all else. With it came omnipotence. Now it's up to Earth's super heroes to make a desperate attempt to thwart this mad god's insane plunge into galactic self-destruction."
  }
];

export default comicsData;
