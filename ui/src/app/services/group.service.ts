import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {IGroupHttp} from '../models/http-models/group-http.interface';
import {IGroup} from "../models/group.interface";

@Injectable()
export class GroupService {
  groupsUrl = `${environment.apiUrl}group`;

  constructor(private _http: HttpClient) {
  }

  getGroups(): Observable<IGroupHttp> {
    return this._http.get<IGroupHttp>(this.groupsUrl);
  }

  getGroup(id): Observable<IGroup> {
    return this._http.get<IGroup>(this.groupsUrl + `/${id}`);
  }

}
