import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap, map, withLatestFrom} from 'rxjs/operators';

import {IAppState} from '../state/app.state';
import {
  GetGroupsSuccess,
  EGroupActions,
  GetGroupSuccess,
  GetGroup,
  GetGroups
} from '../actions/group.actions';
import {GroupService} from '../../services/group.service';
import {IGroupHttp} from '../../models/http-models/group-http.interface';
import {selectGroupList} from '../selectors/group.selector';

@Injectable()
export class GroupEffects {
  @Effect()
  getGroup$ = this._actions$.pipe(
    ofType<GetGroup>(EGroupActions.GetGroup),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectGroupList))),
    switchMap(([id, groups]) => this._groupService.getGroup(id)),
    switchMap((groupHttp) => of(new GetGroupSuccess(groupHttp)))
  );

  @Effect()
  getGroups$ = this._actions$.pipe(
    ofType<GetGroups>(EGroupActions.GetGroups),
    switchMap(() => this._groupService.getGroups()),
    switchMap((groupHttp: IGroupHttp) => of(new GetGroupsSuccess(groupHttp.groups)))
  );

  constructor(
    private _groupService: GroupService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {
  }
}
