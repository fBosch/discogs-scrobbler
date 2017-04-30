import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import * as containers from './containers';
import * as components from './components';

import { LastfmService, DiscogsService } from './services';
import { routes } from './routes';

import {
  MdButtonModule, MdCheckboxModule, MdListModule, MdCardModule,
  MdToolbarModule, MdMenuModule, MdIconModule
} from '@angular/material';


@NgModule({
  declarations: [
    containers.AppComponent,
    containers.EnterCredentialsComponent,
    containers.ReleaseComponent,
    containers.DashboardComponent,
    components.CollectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdButtonModule,
    MdListModule,
    MdCheckboxModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule
  ],
  providers: [
    DiscogsService,
    LastfmService,
  ],
  bootstrap: [containers.AppComponent]
})
export class AppModule { }
