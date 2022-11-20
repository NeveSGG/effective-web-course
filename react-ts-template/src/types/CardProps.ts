export interface CardProps {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  pathname?: string;
  id: number;
  related?: Record<string, unknown>;
}
