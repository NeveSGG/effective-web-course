export interface Series {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
    returned: number;
  };
  comics: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
    returned: number;
  };
}
