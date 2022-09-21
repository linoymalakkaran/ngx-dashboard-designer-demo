import {
  Safe,
  GridType,
  CompactType,
  DisplayGrid,
  IGridLayOutInstance,
} from 'ngx-dashboard-designer';


const options: Safe = {
  gridType: GridType.Fit,
  compactType: CompactType.None,
  margin: 2,
  outerMargin: true,
  outerMarginTop: null,
  outerMarginRight: null,
  outerMarginBottom: null,
  outerMarginLeft: null,
  useTransformPositioning: true,
  mobileBreakpoint: 640,
  useBodyForBreakpoint: false,
  minCols: 1,
  maxCols: 100,
  minRows: 1,
  maxRows: 100,
  maxItemCols: 100,
  minItemCols: 1,
  maxItemRows: 100,
  minItemRows: 1,
  maxItemArea: 2500,
  minItemArea: 1,
  defaultItemCols: 1,
  defaultItemRows: 1,
  fixedColWidth: 105,
  fixedRowHeight: 105,
  keepFixedHeightInMobile: false,
  keepFixedWidthInMobile: false,
  scrollSensitivity: 10,
  scrollSpeed: 20,
  enableEmptyCellClick: false,
  enableEmptyCellContextMenu: false,
  enableEmptyCellDrop: false,
  enableEmptyCellDrag: false,
  enableOccupiedCellDrop: false,
  emptyCellDragMaxCols: 50,
  emptyCellDragMaxRows: 50,
  ignoreMarginInRow: false,
  draggable: {
    enabled: true
  },
  resizable: {
    enabled: false
  },
  swap: false,
  pushItems: true,
  disablePushOnDrag: false,
  disablePushOnResize: false,
  pushDirections: { north: true, east: true, south: true, west: true },
  pushResizeItems: false,
  displayGrid: DisplayGrid.OnDragAndResize,
  disableWindowResize: false,
  disableWarnings: false,
  scrollToNewItems: false
};

export const editLayoutJSON: IGridLayOutInstance = {
  options: options,
  layoutName: 'Layout8',
  layoutDescription: '',
  layoutId: 'Layout8',
  properties: { autoHeight: false },
  dashboardItems: [
    {
      x: 0,
      y: 0,
      id: 0,
      cols: 3,
      rows: 1,
      hasContent: true,
      widgetOptions: [
        {
          isMfeWidget: true,
          displayName: 'Bar Chart',
          icon: 'bar-chart',
          description: 'Bar Chart',
          hostUrl: 'http://localhost:7287/EN/WIDGETS/dashboard-widget-13/remoteEntry.js',
          // hostUrl:
          //   'http://localhost:5203/ATLP/EN/DASHBOARD/V13/WIDGETS/remoteEntry.js',
          // hostUrl:
          //   'https://linoymalakkaran.github.io/ngx-dashboard-designer-demo/widgetsv13/remoteEntry.js',
          componentName: 'BarchartWidgetComponent',
          type: 'module',
          exposedModule: './BarChartWidget'
        }
      ]
    },
    {
      x: 0,
      y: 1,
      id: 1,
      cols: 1,
      rows: 2,
      hasContent: true,
      widgetOptions: [
        // {
        //   isMfeWidget: true,
        //   displayName: 'Bar Chart',
        //   icon: 'bar-chart',
        //   description: 'Bar Chart',
        //   hostUrl:
        //     'http://localhost:9203/ATLP/EN/DASHBOARD/V14/WIDGETS/remoteEntry.js',
        //   // hostUrl: 'http://localhost:3333/remoteEntry.js',
        //   // hostUrl:
        //   //   'http://localhost:7287/EN/WIDGETS/dashboard-widgets-14/remoteEntry.js',
        //   // hostUrl:
        //   //   'https://linoymalakkaran.github.io/ngx-dashboard-designer-demo/widgetsv13/remoteEntry.js',
        //   type: 'module',
        //   // componentName: 'MySearchPageComponent',
        //   // exposedModule: './SearchPage',
        //   componentName: 'BarchartWidgetComponent',
        //   exposedModule: './BarChartWidgetComponent'
        // }
      ]
    },
    {
      x: 1,
      y: 1,
      id: 2,
      cols: 1,
      rows: 2,
      hasContent: true,
      widgetOptions: [
        // {
        //   isMfeWidget: true,
        //   displayName: 'Bar Chart',
        //   icon: 'bar-chart',
        //   description: 'Bar Chart',
        //   hostUrl:
        //     'http://localhost:5203/ATLP/EN/DASHBOARD/WIDGETS/remoteEntry.js',
        //   // hostUrl:
        //   //   'http://localhost:7287/EN/WIDGETS/dashboard-widget-13/remoteEntry.js',
        //   componentName: 'BarchartWidgetComponent',
        //   type: 'module',
        //   exposedModule: './BarChartWidget'
        // }
      ]
    },
    {
      x: 2,
      y: 1,
      id: 3,
      cols: 1,
      rows: 2,
      hasContent: true,
      widgetOptions: [
        // {
        //   isMfeWidget: true,
        //   displayName: 'Bar Chart',
        //   icon: 'bar-chart',
        //   description: 'Bar Chart',
        //   hostUrl:
        //     'http://localhost:9203/ATLP/EN/DASHBOARD/WIDGETS/remoteEntry.js',
        //   // hostUrl:
        //   //   'http://localhost:7287/EN/WIDGETS/dashboard-widget-13/remoteEntry.js',
        //   componentName: 'BarchartWidgetComponent',
        //   type: 'module',
        //   exposedModule: './BarChartWidget'
        // }
      ]
    }
  ]
};
