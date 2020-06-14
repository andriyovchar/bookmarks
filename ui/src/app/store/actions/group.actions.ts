import {Action} from '@ngrx/store';

import {IGroup} from '../../models/group.interface';

export enum EGroupActions {
  GetGroups = '[Group] Get Groups',
  GetGroupsSuccess = '[Group] Get Groups Success',
  GetGroup = '[Group] Get Group',
  GetGroupSuccess = '[Group] Get Group Success'
}

export class GetGroups implements Action {
  public readonly type = EGroupActions.GetGroups;
}

export class GetGroupsSuccess implements Action {
  public readonly type = EGroupActions.GetGroupsSuccess;

  constructor(public payload: IGroup[]) {
  }
}

export class GetGroup implements Action {
  public readonly type = EGroupActions.GetGroup;
  public group: IGroup;

  constructor(public payload: IGroup) {
    this.group = payload;
  }
}

export class GetGroupSuccess implements Action {
  public readonly type = EGroupActions.GetGroupSuccess;

  constructor(public payload: IGroup) {
  }
}

export type GroupActions = GetGroups | GetGroupsSuccess | GetGroup | GetGroupSuccess;
