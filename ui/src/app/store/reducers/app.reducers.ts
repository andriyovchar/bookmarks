import {ActionReducerMap} from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {IAppState} from '../state/app.state';
import {configReducers} from './config.reducers';
import {groupReducers} from './group.reducers';
import {bookmarkReducers} from "./bookmark.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  groups: groupReducers,
  bookmarks: bookmarkReducers,
  config: configReducers
};
