import { Category } from "./categoryModel";

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number;
  amount: number;
}
export class ProductEntity implements Product {
  private static productCount = 0;
  public id: string;
  constructor(
    public category: Category,
    public name: string,
    public price: number,
    public amount: number,
  ) {
    ProductEntity.productCount++;
    this.id = `${category.id}-P${ProductEntity.productCount}`;
  }
}
