import {EGroupActions, GroupActions} from '../actions/group.actions';
import {initialGroupState, IGroupState} from '../state/group.state';

export const groupReducers = (
  state = initialGroupState,
  action: GroupActions
): IGroupState => {
  switch (action.type) {
    case EGroupActions.GetGroupsSuccess: {
      return {
        ...state,
        groups: action.payload
      };
    }
    case EGroupActions.GetGroupSuccess: {
      return {
        ...state,
        selectedGroup: action.payload
      };
    }

    default:
      return state;
  }
};
