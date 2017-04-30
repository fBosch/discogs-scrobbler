import { DiscogsCollectionFolders } from './../../models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  private _collection: DiscogsCollectionFolders;
  @Input() set collection(value: DiscogsCollectionFolders) {
    if (value !== null) {
      this._collection = value;
    }
  }
  get collection() {
    return this._collection;
  }
  constructor() {
  }

  ngOnInit() {
  }


}
