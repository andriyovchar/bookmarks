import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Bookmark} from "../../model/bookmark.entity";

@Injectable()
export class BookmarkService {

    constructor(@InjectRepository(Bookmark) private readonly repo: Repository<Bookmark>) {
    }

    async findByGroupId(groupId: number): Promise<Bookmark[]> {
        return await this.repo.find({groupId: groupId});
    }

    async createBookmark(bookmark: any): Promise<any> {
        return await this.repo.save(this.repo.create(bookmark));
    }

    async deleteBookmark(id: number) {
        return await this.repo.delete({id: id});
    }

    
}
