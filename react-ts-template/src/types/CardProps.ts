interface RelatedItem {
  name: string;
  id: number;
}

export interface CardProps {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  pathname?: string;
  id: number;
  related?: {
    comics?: Array<RelatedItem>;
    series?: Array<RelatedItem>;
    characters?: Array<RelatedItem>;
  };
}
