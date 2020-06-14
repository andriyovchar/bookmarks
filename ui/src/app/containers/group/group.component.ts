import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';

import {IAppState} from '../../store/state/app.state';
import {selectSelectedGroup} from '../../store/selectors/group.selector';
import {GetGroup} from '../../store/actions/group.actions';

@Component({
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group$ = this._store.pipe(select(selectSelectedGroup));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetGroup(this._route.snapshot.params.id));
  }
}
