import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureComponent, MainComponent, HomeComponent, PageNotFoundComponent } from './main/components';

/**
 * Represent application main routes.
 * @type Routes
 */
const appRoutes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: MainComponent,
    path: 'feature',
    children: [
      {
        component: FeatureComponent,
        loadChildren: './feature/data-table/data-table-feature.module#DataTableFeatureModule',
        path: 'data-table'
      },
      {
        component: FeatureComponent,
        loadChildren: './feature/dropdown/dropdown-feature.module#DropdownFeatureModule',
        path: 'dropdown'
      }
    ]
  },
  {
    component: PageNotFoundComponent,
    path: '**'
  }
];

/**
 * Application routing module.
 * @class AppRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' })]
})
export class AppRoutingModule {
}

