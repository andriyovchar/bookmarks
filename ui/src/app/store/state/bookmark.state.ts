import {IBookmark} from '../../models/bookmark.interface';

export interface IBookmarkState {
  bookmarks: IBookmark[];
  selectedBookmark: IBookmark;
}

export const initialBookmarkState: IBookmarkState = {
  bookmarks: null,
  selectedBookmark: null
};
