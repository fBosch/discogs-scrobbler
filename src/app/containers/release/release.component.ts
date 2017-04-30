import { DiscogsService } from './../../services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscogsRelease } from '../../models';
import isNumber from 'lodash/isNumber';
import first from 'lodash/first';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
  public release: DiscogsRelease;
  private releaseId: number;
  private localStoragePrefix = 'discogs-release-';
  public trackSides: Array<any> = [];
  constructor(private discogsService: DiscogsService, private route: ActivatedRoute) { }

  private getTracklistSides() {
    this.trackSides = this.release.tracklist.reduce((accum, track) => {
      if (!parseInt(first(track.position))) {
        const side = first(track.position);
        if (!accum.includes(side)) {
          accum.push(side);
        }
      }
      return accum;
    }, []) as any;
  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.releaseId = value['id'];
      const storedRelease = localStorage.getItem(this.localStoragePrefix + this.releaseId);
      if (!storedRelease) {
        this.discogsService.getRelease(this.releaseId)
          .subscribe(releaseData => {
            this.release = releaseData;
            localStorage.setItem(this.localStoragePrefix + this.releaseId, JSON.stringify(this.release));
            this.getTracklistSides();
          });
      } else {
        this.release = JSON.parse(storedRelease);
        this.getTracklistSides();
      }
    });
  }
}
