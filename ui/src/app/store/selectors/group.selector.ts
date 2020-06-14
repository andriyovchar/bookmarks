import {createSelector} from '@ngrx/store';

import {IAppState} from '../state/app.state';
import {IGroupState} from '../state/group.state';

const selectGroup = (state: IAppState) => state.groups;

export const selectGroupList = createSelector(
  selectGroup,
  (state: IGroupState) => state.groups
);

export const selectSelectedGroup = createSelector(
  selectGroup,
  (state: IGroupState) => state.selectedGroup
);
