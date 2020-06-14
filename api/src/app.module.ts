import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {configService} from "./config/config.service";
import {BookmarkModule} from "./modules/bookmark/bookmark.module";
import {GroupModule} from "./modules/group/group.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        BookmarkModule,
        GroupModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
