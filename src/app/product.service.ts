import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './album'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>(response.json()));
  }

  private _albumUrl: string = "../assets/album.json";
}
