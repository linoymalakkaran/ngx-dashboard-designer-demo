import { Injectable } from '@angular/core';
import { GridLayOutInstance } from 'ngx-dashboard-designer';
import { layoutDefaultData } from '../data-provider/dashboard-layout-data';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  public layoutData: GridLayOutInstance = layoutDefaultData;

  constructor() {}

  getLayoutData(): GridLayOutInstance {
    return this.layoutData;
  }
}
