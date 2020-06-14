import {
    Body,
    Controller, Delete,
    Get, Param, Post,
    Req,
} from "@nestjs/common";
import {BookmarkService} from "./bookmark.service";
import {Bookmark} from "../../model/bookmark.entity";

@Controller("api/bookmark")
export class BookmarkController {

    constructor(private readonly bookmarkService: BookmarkService) {
    }

    @Get(':id')
    async findBookmarkByGroupId(@Param('id') id: number): Promise<{ bookmarks: Bookmark[] }> {
        return {bookmarks: await this.bookmarkService.findByGroupId(id)};
    }

    @Post('')
    async createBookmark(@Body() bookmark) {
        return await this.bookmarkService.createBookmark(bookmark);
    }

    @Delete(':id')
    async deleteBookmark(@Param('id') id: number) {
        return await this.bookmarkService.deleteBookmark(id);
    }

}
