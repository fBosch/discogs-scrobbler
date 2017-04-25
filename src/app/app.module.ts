import { DiscogsService } from './services/discogs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import * as containers from './containers';

import { LastfmService } from './services/lastfm.service';
import { routes } from './routes';


@NgModule({
  declarations: [
    containers.AppComponent,
    containers.EnterCredentialsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DiscogsService,
    LastfmService
  ],
  bootstrap: [containers.AppComponent]
})
export class AppModule { }
