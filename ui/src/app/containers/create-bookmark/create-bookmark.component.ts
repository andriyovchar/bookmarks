import {Component, Input, OnInit} from '@angular/core';
import {CreateBookmark, EBookmarkActions, GetBookmarks} from "../../store/actions/bookmark.actions";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {Router} from "@angular/router";
import {IGroup} from "../../models/group.interface";
import {ToastrService} from "ngx-toastr";
import {Actions, ofType} from "@ngrx/effects";

@Component({
  selector: 'app-create-bookmark-container',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {

  @Input() groups: IGroup[];

  constructor(private _store: Store<IAppState>, private _router: Router,
              private actions$: Actions,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  saveForm(bookmark) {
    this._store.dispatch(new CreateBookmark(bookmark));
    this.actions$.pipe(
      ofType(EBookmarkActions.CreateBookmarkSuccess),
    ).subscribe(() => {
      this.toastr.success('Bookmark created', 'Success');
    });
  }

}
