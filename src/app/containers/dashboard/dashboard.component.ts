import { DiscogsCollectionFolders } from './../../models/collection';
import { Component, OnInit } from '@angular/core';
import { DiscogsService } from '../../services';
import { Router } from '@angular/router';
import sortBy from 'lodash/sortBy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public collection: DiscogsCollectionFolders;

  constructor(private discogsService: DiscogsService, private router: Router) { }

  ngOnInit() {
    if (this.discogsService.currentUserDetails) {
      this.discogsService.getCurrentUserCollection(this.discogsService.currentUserDetails.username)
        .subscribe(usercollection => {
          usercollection.releases = sortBy(usercollection.releases, release => release.basic_information.title);
          this.collection = usercollection;
          console.log(this.collection);
        });
    } else {
      this.router.navigateByUrl('enter-credentials');
    }

  }

}
