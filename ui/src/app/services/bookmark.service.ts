import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {IBookmarkHttp} from '../models/http-models/bookmark-http.interface';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarksUrl = `${environment.apiUrl}bookmark`;

  constructor(private _http: HttpClient) {
  }

  getBookmarks(id): Observable<IBookmarkHttp> {
    return this._http.get<IBookmarkHttp>(this.bookmarksUrl + `/${id}`);
  }

  createBookmark(bookmark) {
    return this._http.post<IBookmarkHttp>(this.bookmarksUrl, bookmark);
  }

  deleteBookmark(bookmarkId) {
    return this._http.delete<IBookmarkHttp>(this.bookmarksUrl + `/${bookmarkId}`);
  }

}
