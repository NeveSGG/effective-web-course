import { CardProps } from 'types/CardProps';

import image1 from '../assets/characters/captain.jpg';
import image2 from '../assets/characters/daredevil.jpeg';
import image3 from '../assets/characters/deadpool.jpg';
import image4 from '../assets/characters/hulk.jpg';
import image5 from '../assets/characters/ironman.jpg';
import image6 from '../assets/characters/punisher.jpg';
import image7 from '../assets/characters/spiderman.jpg';
import image8 from '../assets/characters/thor.jpg';
import image9 from '../assets/characters/wolveriner.jpg';

const charactersData: Array<CardProps> = [
  {
    image: image1,
    imageAlt: 'Captain America',
    name: 'Captain America',
    description:
      'During World War II, Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers',
    id: 1,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image2,
    imageAlt: 'Daredevil',
    name: 'Daredevil',
    description:
      "As a child, Matt Murdock was blinded by radioactive waste while trying to save an elderly stranger about to get hit by a truck carrying the dangerous material. In turn, his other senses were heightened to superhuman sharpness and he gained a form of 'radar sense'. By day, he is a successful trial lawyer; but by night, he guards Hell's Kitchen as Daredevil: the Man Without Fear",
    id: 2,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image3,
    imageAlt: 'Deadpool',
    name: 'Deadpool',
    description:
      "Wade Wilson is a former test subject of the Weapon X program, where he received his regenerative healing factor through the scientific experiments conducted upon him. A prominent enemy, ally and later, member of X-Force. He's famous for breaking the Fourth Wall.",
    id: 3,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image4,
    imageAlt: 'Hulk',
    name: 'Hulk',
    description:
      "After being bombarded with a massive dose of gamma radiation while saving a young man's life during an experimental bomb testing, Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength.",
    id: 4,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image5,
    imageAlt: 'Iron Man',
    name: 'Iron Man',
    description:
      'Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself, but he would have a change of heart after he was kidnapped by terrorists and gravely injured. Pressured to create a weapon of mass destruction, Stark instead created a suit of armor powerful enough for him to escape.',
    id: 5,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image6,
    imageAlt: 'Punisher',
    name: 'Punisher',
    description:
      "When U.S. Marine veteran Frank Castle's family's was murdered for witnessing a mob hit, the man vowed to avenge their deaths and became a one-man army in his personal war against the criminal underworld.",
    id: 6,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image7,
    imageAlt: 'Spider-Man',
    name: 'Spider-Man',
    description:
      'Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, Peter learned that "with great power, comes great responsibility." Swearing to always protect the innocent from harm, Peter Parker became Spider-Man.',
    id: 7,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image8,
    imageAlt: 'Thor',
    name: 'Thor',
    description:
      'Thor Odinson is the All-father of Asgard /God of Thunder, offspring of All-Father Odin & Elder-Goddess Gaea. Combining the powers of both realms makes him an elder-god hybrid and a being of no perceivable limits.',
    id: 8,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  },
  {
    image: image9,
    imageAlt: 'Wolverine',
    name: 'Wolverine',
    description:
      'A long-lived mutant with the rage of a beast and the soul of a Samurai, James "Logan" Howlett once mysterious past is filled with blood, war, and betrayal.',
    id: 9,
    related: {
      comics: [
        {
          name: 'Amazing Fantasy (1962)',
          id: 1
        },
        {
          name: 'Infinity Gauntlet',
          id: 3
        }
      ],
      series: [
        {
          name: 'Marvel`s Daredevil',
          id: 1
        },
        {
          name: 'Loki',
          id: 2
        }
      ]
    }
  }
];

export default charactersData;
