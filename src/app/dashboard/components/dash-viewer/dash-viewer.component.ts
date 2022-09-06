import { Component, OnInit } from '@angular/core';
import { IGridLayOutInstance } from 'ngx-dashboard-designer';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dash-viewer',
  templateUrl: './dash-viewer.component.html',
  styleUrls: ['./dash-viewer.component.scss'],
})
export class DashViewerComponent implements OnInit {
  dashboardLayout!: IGridLayOutInstance;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardLayout = this.dashboardService.layoutData;
  }

  changedOptions(): void {
    if (
      this.dashboardLayout.options.api &&
      this.dashboardLayout.options.api.optionsChanged
    ) {
      this.dashboardLayout.options.api.optionsChanged();
    }
  }
}
