import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBookmark} from "../../models/bookmark.interface";
import {IGroup} from "../../models/group.interface";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  @Input()
  group: IGroup;
  @Input()
  bookmarks: IBookmark[] = [];
  displayedColumns = ['id', 'name', 'url', 'delete'];
  @Output()
  deleteBookmarkId: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteBookmark(id: number) {
    this.deleteBookmarkId.emit(id);
  }
}
