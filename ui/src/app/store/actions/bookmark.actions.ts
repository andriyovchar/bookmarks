import {Action, createAction, props} from '@ngrx/store';

import {IBookmark} from '../../models/bookmark.interface';

export enum EBookmarkActions {
  GetBookmarks = '[Bookmark] Get Bookmarks',
  GetBookmarksSuccess = '[Bookmark] Get Bookmarks Success',
  GetBookmark = '[Bookmark] Get Bookmark',
  GetBookmarkSuccess = '[Bookmark] Get Bookmark Success',
  CreateBookmark = '[Bookmark] Create Bookmark',
  CreateBookmarkSuccess = '[Bookmark] Create Bookmark Success',
  DeleteBookmark = '[Bookmark] Delete Bookmark',
  DeleteBookmarkSuccess = '[Bookmark] Delete Bookmark Success',
}

export class GetBookmarks implements Action {

  public readonly type = EBookmarkActions.GetBookmarks;
  public id;

  constructor(id: number) {
    this.id = id;
  }
}

export class GetBookmarksSuccess implements Action {
  public readonly type = EBookmarkActions.GetBookmarksSuccess;

  constructor(public payload: IBookmark[]) {
  }
}

export class GetBookmark implements Action {
  public readonly type = EBookmarkActions.GetBookmark;

  constructor(public payload: number) {
  }
}

export class GetBookmarkSuccess implements Action {
  public readonly type = EBookmarkActions.GetBookmarkSuccess;

  constructor(public payload: IBookmark) {
  }
}

export class CreateBookmark implements Action {
  public readonly type = EBookmarkActions.CreateBookmark;
  public bookmark: any;

  constructor(bookmark: any) {
    this.bookmark = bookmark;
  }
}

export class CreateBookmarkSuccess implements Action {
  public readonly type = EBookmarkActions.CreateBookmarkSuccess;

  constructor(public payload: IBookmark) {
  }
}

export class DeleteBookmark implements Action {
  public readonly type = EBookmarkActions.DeleteBookmark;
  public bookmarkId: any;

  constructor(bookmarkId: any) {
    this.bookmarkId = bookmarkId;
  }
}

export class DeleteBookmarkSuccess implements Action {
  public readonly type = EBookmarkActions.DeleteBookmarkSuccess;

  constructor(public payload: IBookmark) {
  }
}

export type BookmarkActions =
  GetBookmarks
  | GetBookmarksSuccess
  | GetBookmark
  | GetBookmarkSuccess
  | CreateBookmark
  | CreateBookmarkSuccess
  | DeleteBookmark;
