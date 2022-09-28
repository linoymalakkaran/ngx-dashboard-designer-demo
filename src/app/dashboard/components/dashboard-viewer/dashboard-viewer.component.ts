import { Component, OnInit } from '@angular/core';
import { IGridLayOutInstance } from 'ngx-dashboard-designer';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.scss'],
})
export class DashboardViewerComponent implements OnInit {
  dashboardLayout!: IGridLayOutInstance;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardLayout = this.dashboardService.layoutInfo;
    console.log('view loader => ', this.dashboardLayout);
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
