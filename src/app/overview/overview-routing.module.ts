import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components';

/**
 * Represent application overview module routes.
 */
const overviewRoutes: Routes = [
  {
    component: HomeComponent,
    path: ''
  }
];

/**
 * Application overview routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(overviewRoutes)]
})
export class OverviewRoutingModule {}
