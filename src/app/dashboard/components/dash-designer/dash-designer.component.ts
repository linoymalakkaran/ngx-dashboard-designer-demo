import { Component, ViewChild } from '@angular/core';
import {
  NgxDashboardDesigner,
  IDashboardWidgetOption,
} from 'ngx-dashboard-designer';

@Component({
  selector: 'app-dash-designer',
  templateUrl: './dash-designer.component.html',
  styleUrls: ['./dash-designer.component.scss'],
})
export class DashDesignerComponent {
  @ViewChild(NgxDashboardDesigner) ngxDashboardDesigner!: NgxDashboardDesigner;
  widgetOptions: IDashboardWidgetOption = {
    ismfeWidgets: true,
    mfeWidgetTypes: [
      {
        displayName: 'Bar Chart',
        icon: 'Barchart',
        description: 'Bar Chart',
        hostUrl: 'http://localhost:5203/remoteEntry.js', //'http://127.0.0.1:5555/dashboard-widgets/remoteEntry.js',
        componentName: 'SampleBarChartComponent',
        type: 'module',
        exposedModule: './Component',
      },
    ],
  };

  constructor() {}

  saveLayout() {
    const layout = this.ngxDashboardDesigner.getDashboardData;
    console.log(layout);
  }
}
