import { DiscogsService } from '../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-credentials',
  templateUrl: './enter-credentials.component.html',
  styleUrls: ['./enter-credentials.component.scss']
})
export class EnterCredentialsComponent implements OnInit {

  constructor(private discogsService: DiscogsService) { }

  getUserDetails(username) {
    this.discogsService.getUserDetails(username)
      .subscribe(userDetails => this.discogsService.currentUserDetails = userDetails)
    this.discogsService.getCurrentUserCollection(username).subscribe(collectionItems => {
      console.log(collectionItems);
    });
  }

  ngOnInit() {

  }

}
