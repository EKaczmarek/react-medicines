import { Medicine } from "../types/Medicine";
import { IMedicineRepository } from "./interfaces/IMedicineRepository";

export class MedicineRepository implements IMedicineRepository {
    get(id: string): Promise<Medicine | null> {
        throw new Error("Method not implemented.");
    }

}