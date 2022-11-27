interface ItemWithName {
  resourceURI: string;
  name: string;
}

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
    items: Array<ItemWithName>;
    returned: number;
  };
  comics: {
    available: number;
    collectionURI: string;
    items: Array<ItemWithName>;
    returned: number;
  };
}
