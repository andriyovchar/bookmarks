import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {IGroup} from '../../models/group.interface';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  @Input()
  groups: IGroup[];
  @Output()
  groupSelected: EventEmitter<number> = new EventEmitter();
  displayedColumns = ['id', 'name'];

  constructor() {
  }

  ngOnInit() {
  }

  navigateToGroup(id: number) {
    this.groupSelected.emit(id);
  }
}
