import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table styling routes.
 */
const dataTableStylingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'responsive-configuration'
  },
  {
    loadChildren: './data-table-responsive-conf/data-table-responsive-conf.module#DataTableResponsiveConfModule',
    // loadChildren: () => import('./data-table-responsive-conf/data-table-responsive-conf.module')
    //   .then((m) => m.DataTableResponsiveConfModule),
    path: 'responsive-configuration',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Responsive Configurations',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-themes/data-table-themes.module#DataTableThemesModule',
    // loadChildren: () => import('./data-table-themes/data-table-themes.module')
    //   .then((m) => m.DataTableThemesModule),
    path: 'themes',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Styling | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-custom-theming/data-table-custom-theming.module#DataTableCustomThemingModule',
    // loadChildren: () => import('./data-table-custom-theming/data-table-custom-theming.module')
    //   .then((m) => m.DataTableCustomThemingModule),
    path: 'custom-theming',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Customize | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Data table styling routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableStylingRoutes)]
})
export class DataTableStylingRoutingModule {
}
