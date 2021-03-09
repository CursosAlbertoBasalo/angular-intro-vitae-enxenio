export interface Category {
  name: string;
  description?: string;
  id: string;
  ownerId?: string;
}
export type ApiCategories = {
  data: Category[];
};
export type ApiCategory = {
  data: Category;
};
