import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent, PageNotFoundComponent, OverviewComponent } from './main/components';

/**
 * Represent application main routes.
 */
const appRoutes: Routes = [
  {
    component: OverviewComponent,
    loadChildren: () => import('./overview/overview.module')
      .then((m) => m.OverviewModule),
    path: ''
  },
  {
    component: MainComponent,
    path: 'feature',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'data-table'
      },
      {
        loadChildren: () => import('./feature/data-table/data-table-feature.module')
          .then((m) => m.DataTableFeatureModule),
        path: 'data-table'
      },
      {
        loadChildren: () => import('./feature/dropdown/dropdown-feature.module')
          .then((m) => m.DropdownFeatureModule),
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
 */
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ]
})
export class AppRoutingModule {}
