import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashDesignerComponent } from './components/dash-designer/dash-designer.component';
import { DashViewerComponent } from './components/dash-viewer/components/dash-viewer.component';
import { NgxDashboardDesignerModule } from 'ngx-dashboard-designer';

@NgModule({
  declarations: [DashDesignerComponent, DashViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    NgxDashboardDesignerModule
  ],
})
export class DashboardModule {}
