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
        title: 'Ornamentum - Data Table | Functionality | Responsive Configurations',
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
        title: 'Ornamentum - Data Table | Styling | Themes | User Experience',
        // tslint:disable-next-line
        keywords: 'ornamentum data table themes,data table themes,grid themes,data table base theme,data table dark theme,data table flat theme,data table ornamentum theme,data table aegean theme',
        // tslint:disable-next-line
        description: 'Ornamentum data table list has a variety of predefined themes which you can apply to your application. Greater selection of themes are available with different colour variations to chose from.'
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
        title: 'Ornamentum - Data Table | Customize | Themes | User Experience',
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
