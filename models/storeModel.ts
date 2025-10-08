import { Category } from "./categoryModel";
import { Product } from "./productModel";

export interface Store {
  id: string;
  branch: string;
  categories: Category[];
  products: Product[];
}

export class StoreEntity implements Store {
  public id: string;
  public branch: string;
  public categories: Category[] = [];
  public products: Product[] = [];
  private static storeCount = 0;

  constructor(branch: string) {
    StoreEntity.storeCount++;
    this.id = `S${StoreEntity.storeCount}`;
    this.branch = branch;
  }
}
