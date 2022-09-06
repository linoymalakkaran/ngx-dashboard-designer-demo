import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashDesignerComponent } from './components/dash-designer/dash-designer.component';
import {
  NgxDashboardDesignerModule,
  DashboardModuleConfigModel,
} from 'ngx-dashboard-designer';
import { DashViewerComponent } from './components/dash-viewer/dash-viewer.component';
import { MainLayoutComponent } from './components/layout/main-layout.component';

const dashboardConfig: DashboardModuleConfigModel = {
  baseAssetsPath: 'assets/dashboard-designer/',
  fontBaseUrl: 'assets/dashboard-designer/',
  isDynamicFontLoading: true,
  isRemoteUrlLangEnabled: false,
};

@NgModule({
  declarations: [
    DashDesignerComponent,
    DashViewerComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxDashboardDesignerModule.forRoot(dashboardConfig),
  ],
})
export class DashboardModule {}
