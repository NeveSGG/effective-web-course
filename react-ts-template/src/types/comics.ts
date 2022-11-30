interface ItemWithName {
  resourceURI: string;
  name: string;
}

export interface Comics {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  resourceURI: string;
  series: ItemWithName;
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
}
