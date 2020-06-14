import {
    Controller,
    Get,
    Req,
} from "@nestjs/common";

import {GroupService} from "./group.service";
import {Group} from "../../model/group.entity";


@Controller("api/group")
export class GroupController {
    constructor(
        private readonly groupService: GroupService,
    ) {
    }


    @Get('')
    async get(@Req() request): Promise<{ groups: Group[] }> {
        return {groups: await this.groupService.findAll()};
    }

}
