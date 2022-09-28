import { Component, ViewChild } from '@angular/core';
import {
  NgxDashboardDesignerComponent,
  IDashboardWidgetOption,
  IGridLayOutInstance,
} from 'ngx-dashboard-designer';
import { editLayoutJSON } from '../../data-provider/dashboard-edit.data';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-designer',
  templateUrl: './dashboard-designer.component.html',
  styleUrls: ['./dashboard-designer.component.scss'],
})
export class DashboardDesignerComponent {
  editLayoutJSON: IGridLayOutInstance = editLayoutJSON;
  @ViewChild(NgxDashboardDesignerComponent)
  ngxDashboardDesigner!: NgxDashboardDesignerComponent;
  widgetOptions: IDashboardWidgetOption = {
    mfeWidgetTypes: [
      {
        isMfeWidget: true,
        displayName: 'Bar Chart',
        icon: 'bar-chart',
        description: 'Bar Chart',
        hostUrl:
          'https://linoymalakkaran.github.io/ngx-dashboard-designer-demo/widgetsv14/remoteEntry.js',
        componentName: 'BarchartWidgetComponent',
        type: 'module',
        exposedModule: './BarChartWidget',
      },
    ],
  };

  constructor(private dashboardService: DashboardService) {}

  saveLayout() {
    const layout = this.ngxDashboardDesigner.getDashboardData;
    this.dashboardService.layoutInfo = JSON.parse(JSON.stringify(layout));
    alert(
      'Saved successfully, please click on viewer link to see the preview.'
    );
    console.log(layout);
  }
}
