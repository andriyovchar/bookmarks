import {Component, OnInit, Input} from '@angular/core';

import {IGroup} from '../../models/group.interface';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  @Input()
  group: IGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
