import {IBookmark} from '../bookmark.interface';

export interface IBookmarkHttp {
  bookmarks: IBookmark[];
  bookmark: IBookmark;
  bookmarkId: number;
}
