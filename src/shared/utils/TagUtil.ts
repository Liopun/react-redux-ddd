import { Tag, TagDTO } from "../models/tag";

export class TagUtil {
    public static toViewModel (dto: TagDTO): Tag {
        return {
            id: dto.id,
            display: dto.name
        }
    }
}