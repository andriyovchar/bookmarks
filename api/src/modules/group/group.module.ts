import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Group} from "../../model/group.entity";
import {GroupController} from "./group.controller";
import {GroupService} from "./group.service";

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    providers: [GroupService],
    controllers: [GroupController],
    exports: []
})
export class GroupModule { }
