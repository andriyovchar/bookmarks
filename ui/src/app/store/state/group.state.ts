import {IGroup} from '../../models/group.interface';

export interface IGroupState {
  groups: IGroup[];
  selectedGroup: IGroup;
}

export const initialGroupState: IGroupState = {
  groups: null,
  selectedGroup: null
};
