import { Medicine } from "../../types/Medicine";
import { IRepository } from "./IRepository";

export interface IMedicineRepository extends IRepository<Medicine> {
    get(id: string): Promise<Medicine | null>;
  }
  