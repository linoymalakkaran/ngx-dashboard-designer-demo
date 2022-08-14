import { GridLayOutInstance } from "ngx-dashboard-designer";

export const layoutData: GridLayOutInstance = {
  options: {
    gridType: 'fit',
    compactType: 'none',
    margin: 10,
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
      enabled: true
    },
    swap: false,
    pushItems: true,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: {
      north: true,
      east: true,
      south: true,
      west: true
    },
    pushResizeItems: false,
    displayGrid: 'always',
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false,
    api: {}
  },
  layoutName: 'Layout8',
  layoutDescription: '',
  layoutId: 'Layout8',
  properties: {},
  dashboardItems: [
    {
      x: 0,
      y: 0,
      cols: 3,
      rows: 1,
      hasContent: true,
      widgetOption: {
        displayName: 'Bar Chart',
        icon: 'bar-chart',
        description: 'Bar Chart',
        hostUrl: 'http://localhost:5203/remoteEntry.js',
        componentName: 'SampleBarChartComponent',
        type: 'module',
        exposedModule: './Component'
      }
    },
    {
      x: 0,
      y: 1,
      cols: 1,
      rows: 2,
      hasContent: true,
      widgetOption: {
        displayName: 'Bar Chart',
        icon: 'bar-chart',
        description: 'Bar Chart',
        hostUrl: 'http://localhost:5203/remoteEntry.js',
        componentName: 'SampleBarChartComponent',
        type: 'module',
        exposedModule: './Component'
      }
    },
    {
      x: 1,
      y: 1,
      cols: 1,
      rows: 2,
      hasContent: true
    },
    {
      x: 2,
      y: 1,
      cols: 1,
      rows: 2,
      hasContent: true
    }
  ]
};
