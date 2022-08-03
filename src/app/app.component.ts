import { Component } from '@angular/core';
import { IDashboardWidgetOption } from 'ngx-dashboard-designer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  title = 'dashboard-designer';
}
