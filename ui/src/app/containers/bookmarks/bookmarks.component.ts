import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectBookmarkList} from "../../store/selectors/bookmark.selector";
import {IAppState} from "../../store/state/app.state";
import {Router} from "@angular/router";
import {DeleteBookmark, EBookmarkActions, GetBookmarks} from "../../store/actions/bookmark.actions";
import {IGroup} from "../../models/group.interface";
import {Actions, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  @Input()
  group: IGroup;

  bookmarks$ = this._store.pipe(select(selectBookmarkList));

  constructor(private _store: Store<IAppState>, private _router: Router,
              private actions$: Actions,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this._store.dispatch(new GetBookmarks(this.group.id));
  }

  deleteBookmark(id: number) {
    this._store.dispatch(new DeleteBookmark(id));
    this.actions$.pipe(
      ofType(EBookmarkActions.DeleteBookmarkSuccess),
    ).subscribe(() => {
      this.getBookmarks();
      this.toastr.success('Bookmark deleted', 'Success');
    });
  }
}
