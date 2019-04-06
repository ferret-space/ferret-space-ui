import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.scss']
})
export class AdminAreaComponent implements OnInit {

  settings: any;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getSettings().subscribe(settings => this.settings = settings);
  }

}
