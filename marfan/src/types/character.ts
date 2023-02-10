interface ItemWithName {
  resourceURI: string;
  name: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Array<ItemWithName>;
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Array<ItemWithName>;
    returned: number;
  };
}
