import {GetGroups} from './../../store/actions/group.actions';
import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';

import {IAppState} from '../../store/state/app.state';
import {selectGroupList} from '../../store/selectors/group.selector';
import {Router} from '@angular/router';

@Component({
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups$ = this._store.pipe(select(selectGroupList));

  constructor(private _store: Store<IAppState>, private _router: Router) {
  }

  ngOnInit() {
    this._store.dispatch(new GetGroups());
  }

  navigateToGroup(id: number) {
    this._router.navigate(['group', id]);
  }
}
