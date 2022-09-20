import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardDesignerComponent } from './components/dashboard-designer/dashboard-designer.component';
import {
  NgxDashboardDesignerModule,
  DashboardModuleConfigModel,
} from 'ngx-dashboard-designer';
import { DashboardViewerComponent } from './components/dashboard-viewer/dashboard-viewer.component';
import { MainLayoutComponent } from './components/layout/main-layout.component';

const dashboardConfig: DashboardModuleConfigModel = {
  baseAssetsPath: 'assets/dashboard-designer/',
  fontBaseUrl: 'assets/dashboard-designer/',
  isDynamicFontLoading: true,
  isRemoteUrlLangEnabled: false,
};

@NgModule({
  declarations: [
    DashboardDesignerComponent,
    DashboardViewerComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxDashboardDesignerModule.forRoot(dashboardConfig),
  ],
})
export class DashboardModule {}
