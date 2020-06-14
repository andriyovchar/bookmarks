import {createSelector} from '@ngrx/store';

import {IAppState} from '../state/app.state';
import {IBookmarkState} from '../state/bookmark.state';

const selectBookmark = (state: IAppState) => state.bookmarks;

export const selectBookmarkList = createSelector(
  selectBookmark,
  (state: IBookmarkState) => state.bookmarks
);

export const selectSelectedBookmark = createSelector(
  selectBookmark,
  (state: IBookmarkState) => state.selectedBookmark
);
