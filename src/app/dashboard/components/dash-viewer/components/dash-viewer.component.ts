import { Component, OnInit } from '@angular/core';
import { IGridLayOutInstance } from 'ngx-dashboard-designer';
import { layoutData } from '../data-provider/dashboard-layout-data';

@Component({
  selector: 'app-dash-viewer',
  templateUrl: './dash-viewer.component.html',
  styleUrls: ['./dash-viewer.component.scss'],
})
export class DashViewerComponent implements OnInit {
  dashboardLayout!: IGridLayOutInstance;

  constructor() {}

  ngOnInit(): void {
    this.dashboardLayout = layoutData;
  }
}
