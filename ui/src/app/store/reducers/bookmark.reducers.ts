import {EBookmarkActions, BookmarkActions} from '../actions/bookmark.actions';
import {initialBookmarkState, IBookmarkState} from '../state/bookmark.state';

export const bookmarkReducers = (
  state = initialBookmarkState,
  action: BookmarkActions
): IBookmarkState => {
  switch (action.type) {
    case EBookmarkActions.GetBookmarksSuccess: {
      return {
        ...state,
        bookmarks: action.payload
      };
    }
    case EBookmarkActions.GetBookmarkSuccess: {
      return {
        ...state,
        selectedBookmark: action.payload
      };
    }

    default:
      return state;
  }
};
