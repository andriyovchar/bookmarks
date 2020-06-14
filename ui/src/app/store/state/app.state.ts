import {RouterReducerState} from '@ngrx/router-store';

import {IGroupState, initialGroupState} from './group.state';
import {initialConfigState, IConfigState} from './config.state';
import {IBookmarkState, initialBookmarkState} from "./bookmark.state";


export interface IAppState {
  router?: RouterReducerState;
  groups: IGroupState;
  bookmarks: IBookmarkState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  groups: initialGroupState,
  bookmarks: initialBookmarkState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
