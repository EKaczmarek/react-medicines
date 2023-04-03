import { Category } from "./Category";
import { Unit } from "./Unit";

export type Medicine = {
    id: number;
    name: string;
    category: Category;
    amount: number;
    unit: Unit;
    expirationDate: Date;
  };