import { Injectable } from '@angular/core';
import { IGridLayOutInstance } from 'ngx-dashboard-designer';
import { layoutDefaultData } from '../data-provider/dashboard-layout-data';

@Injectable({ providedIn: 'root' })
export class DashboardService {
 private layoutData!: IGridLayOutInstance;

  constructor() {}

  get layoutInfo(): IGridLayOutInstance {
    return this.layoutData || layoutDefaultData;
  }

  set layoutInfo(layoutData: IGridLayOutInstance) {
    this.layoutData = JSON.parse(JSON.stringify(layoutData));
  }
}
