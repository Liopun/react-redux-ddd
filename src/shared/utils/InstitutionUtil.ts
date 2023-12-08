import { Institution, InstitutionDTO } from "../models/institution";

export class InstitutionUtil {
    public static toViewModel (dto: InstitutionDTO): Institution {
        return {
            label: dto.id,
            value: dto.name
        }
    }
}