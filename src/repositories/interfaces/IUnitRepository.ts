import { Unit } from "../types/Unit";
import { IRepository } from "./IRepository";

interface UnitRepository extends IRepository<Unit> {
    get(id: string): Promise<Unit | null>;
  }
  