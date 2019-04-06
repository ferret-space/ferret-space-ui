import { Component, OnInit } from '@angular/core';
import {TrackService} from "../track.service";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracks: any;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getTracks().subscribe(tracks => this.tracks = tracks);
  }

}
