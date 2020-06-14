import {
    Controller,
    Get, Param,
    Req,
} from "@nestjs/common";

import {GroupService} from "./group.service";
import {Group} from "../../model/group.entity";


@Controller("api/group")
export class GroupController {

    constructor(private readonly groupService: GroupService) {
    }

    @Get('')
    async findAll(@Req() request): Promise<{ groups: Group[] }> {
        return {groups: await this.groupService.findAll()};
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Group> {
        return await this.groupService.findOne(id);
    }

}
