import { DiscogsService } from './../../services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchQuery: string;
  constructor(private discogsService: DiscogsService) { }

  ngOnInit() {
  }

}
