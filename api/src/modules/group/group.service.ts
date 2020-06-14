import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Group} from "../../model/group.entity";
import {Repository} from "typeorm";

@Injectable()
export class GroupService {

    constructor(@InjectRepository(Group) private readonly repo: Repository<Group>) {}

    async findAll(): Promise<Group[]> {
        return await this.repo.find();
    }

    async findOne(id): Promise<Group> {
        return await this.repo.findOne(id);
    }
    
}
