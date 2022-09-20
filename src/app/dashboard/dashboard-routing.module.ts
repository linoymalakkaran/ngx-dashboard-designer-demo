import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDesignerComponent } from './components/dashboard-designer/dashboard-designer.component';
import { DashboardViewerComponent } from './components/dashboard-viewer/dashboard-viewer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'designer',
    pathMatch: 'full',
  },
  {
    path: 'designer',
    component: DashboardDesignerComponent,
  },
  {
    path: 'viewer',
    component: DashboardViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
