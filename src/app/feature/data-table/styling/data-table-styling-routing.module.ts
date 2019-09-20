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
        // tslint:disable-next-line
        keywords: 'responsive configuration,responsive data grids,responsive data tables,mobile friendly data tables,mobile friendly data grids,tablet-friendly data tables,tablet friendly data grids',
        // tslint:disable-next-line
        description: 'Responsiveness configurations enabled the capability of supporting full spectrum of device resolutions.'
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
        // tslint:disable-next-line
        keywords: 'themes,themes for data table,themes for data grid,customizable themes for data grids,customizable themes for data tables,data table look and feel,data grid look and feel,user experience',
        // tslint:disable-next-line
        description: 'Data table supports several themes out of the box that can be selected depending on application UI/UX requirements.'
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
        keywords: 'custom theming,customized themes,customize table ux,custom table styles,custom grid colours',
        description: 'Data table support customizing and building your own theme via SASS variables.'
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
