import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMainComponent } from './main/components';

/**
 * Represent application main routes.
 * @type Routes
 */
const appRoutes: Routes = [
  {
    component: AppMainComponent,
    loadChildren: 'example/feature/feature.module#FeatureModule',
    path: ''
  }
];

/**
 * Application routing module.
 * @class AppRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {
}

