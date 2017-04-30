import { DiscogsService } from '../../services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enter-credentials',
  templateUrl: './enter-credentials.component.html',
  styleUrls: ['./enter-credentials.component.scss']
})
export class EnterCredentialsComponent implements OnInit {

  constructor(private discogsService: DiscogsService, private router: Router) { }

  getDiscogsUserDetails(username) {
    this.discogsService.getUserDetails(username)
      .subscribe(userDetails => {
        this.discogsService.currentUserDetails = userDetails;
        localStorage.setItem(this.discogsService.userLocalStorageKey, JSON.stringify(userDetails));
        this.router.navigateByUrl('/dashboard');
      });
  }

  ngOnInit() {
    const storedUser = localStorage.getItem(this.discogsService.userLocalStorageKey);
    if (storedUser) {
      this.discogsService.currentUserDetails = JSON.parse(storedUser);
      this.router.navigateByUrl('/dashboard');
    }
  }

}
