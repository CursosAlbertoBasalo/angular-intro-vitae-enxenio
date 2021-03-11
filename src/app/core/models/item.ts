export interface Item {
  name: string;
  description?: string;
  id: string;
  ownerId?: string;
  categoryId?: string;
  url?: string;
  price?: number;
}
export type ApiItems = {
  data: Item[];
};
export type ApiItem = {
  data: Item;
};
