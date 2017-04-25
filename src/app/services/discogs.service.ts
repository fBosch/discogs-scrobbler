import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { DiscogsUser, DiscogsCollectionFolder } from '../models';

@Injectable()
export class DiscogsService {
  public currentUserDetails: DiscogsUser;

  private apiRoot = method => `https://api.discogs.com/${method}?callback=JSONP_CALLBACK`;
  constructor(private jsonp: Jsonp) {

  }

  private extractData(res: Response): any {
    const body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getUserDetails(username: string): Observable<DiscogsUser> {
    return this.jsonp.request(this.apiRoot(`users/${username}`))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCollectionFolders(username: string): Observable<DiscogsCollectionFolder[]> {
    return this.jsonp.request(this.apiRoot(`users/${username}/collection/folders`))
      .map(response => this.extractData(response).folders)
      .catch(this.handleError);
  }

  getCollectionItemsByFolderId(username: string, folderId: number) {
    return this.jsonp.request(this.apiRoot(`/users/${username}/collection/folders/${folderId}/releases`))
      .map(this.extractData)
      .catch(this.handleError);
  }


  getCurrentUserCollection(username: string) {
    return this.getCollectionFolders(username)
      .flatMap(folders => folders.map(folder => this.getCollectionItemsByFolderId(username, folder.id)))
      .flatMap(collections => collections)
      .catch(this.handleError);
  }



}
