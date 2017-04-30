import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _title: string;
  public set title(value: string) {
    this._title = value;
  }
  public get title(): string {
    return this._title;
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data.hasOwnProperty('title')) {
      this.title = this.route.snapshot.data['title'];
    }
  }

}
