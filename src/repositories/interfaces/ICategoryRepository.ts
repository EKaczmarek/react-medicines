import { Category } from "../types/Category";
import { IRepository } from "./IRepository";

interface CategoryRepository extends IRepository<Category> {
    get(id: string): Promise<Category | null>;
  }
  