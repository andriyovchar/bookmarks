import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {IAppState} from '../state/app.state';
import {
  GetBookmarksSuccess,
  EBookmarkActions,
  GetBookmarks, CreateBookmark, CreateBookmarkSuccess, DeleteBookmarkSuccess, DeleteBookmark,
} from '../actions/bookmark.actions';
import {BookmarkService} from '../../services/bookmark.service';
import {IBookmarkHttp} from '../../models/http-models/bookmark-http.interface';

@Injectable()
export class BookmarkEffects {

  @Effect()
  getBookmarks$ = this._actions$.pipe(
    ofType<GetBookmarks>(EBookmarkActions.GetBookmarks),
    switchMap((action) => this._bookmarkService.getBookmarks(action.id)),
    switchMap((bookmarkHttp: IBookmarkHttp) => of(new GetBookmarksSuccess(bookmarkHttp.bookmarks)))
  );

  @Effect()
  createBookmark$ = this._actions$.pipe(
    ofType<CreateBookmark>(EBookmarkActions.CreateBookmark),
    switchMap((action) => this._bookmarkService.createBookmark(action.bookmark)),
    switchMap((createBookmarkHttp: IBookmarkHttp) => of(new CreateBookmarkSuccess(createBookmarkHttp.bookmark)))
  );

  @Effect()
  deleteBookmark$ = this._actions$.pipe(
    ofType<DeleteBookmark>(EBookmarkActions.DeleteBookmark),
    switchMap((action) => this._bookmarkService.deleteBookmark(action.bookmarkId)),
    switchMap((deleteBookmarkHttp: IBookmarkHttp) => of(new DeleteBookmarkSuccess(deleteBookmarkHttp.bookmark)))
  );


  constructor(
    private _bookmarkService: BookmarkService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {
  }
}
