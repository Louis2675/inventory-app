import { Store } from './storeModel';

export interface Category {
  id: string;
  name: string;
  color: string;
}

export class CategoryEntity implements Category {
  private static categoryCount = 0;
  public id: string;
  constructor(
    public store: Store,
    public name: string,
    public color: string,
  ) {
    CategoryEntity.categoryCount++;
    this.id = `${store.id}-C${CategoryEntity.categoryCount}`;
  }
}
