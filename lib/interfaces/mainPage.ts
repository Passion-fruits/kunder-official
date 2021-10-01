import { musicCardObject } from "./music";
export interface ThemaCardListProps {
  title: string;
  descripton: string;
  isColumn: boolean;
  data: musicCardObject[];
}
