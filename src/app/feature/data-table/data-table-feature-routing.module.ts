import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Represent application data table feature module routes.
 */
const dataTableFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    loadChildren: './overview/data-table-overview.module#DataTableOverviewModule',
    // loadChildren: () => import('./overview/data-table-overview.module')
    //   .then((m) => m.DataTableOverviewModule),
    path: 'overview'
  },
  {
    loadChildren: './data-binding/data-table-data-binding.module#DataTableDataBindingModule',
    // loadChildren: () => import('./data-binding/data-table-data-binding.module')
    //   .then((m) => m.DataTableDataBindingModule),
    path: 'data-binding'
  },
  {
    loadChildren: './functionality/data-table-functionality.module#DataTableFunctionalityModule',
    // loadChildren: () => import('./functionality/data-table-functionality.module')
    //   .then((m) => m.DataTableFunctionalityModule),
    path: 'functionality'
  },
  {
    loadChildren: './templating/data-table-templating.module#DataTableTemplatingModule',
    // loadChildren: () => import('./templating/data-table-templating.module')
    //   .then((m) => m.DataTableTemplatingModule),
    path: 'templating'
  },
  {
    loadChildren: './options/data-table-options.module#DataTableOptionsModule',
    // loadChildren: () => import('./options/data-table-options.module')
    //   .then((m) => m.DataTableOptionsModule),
    path: 'options'
  },
  {
    loadChildren: './styling/data-table-styling.module#DataTableStylingModule',
    // loadChildren: () => import('./styling/data-table-styling.module')
    //   .then((m) => m.DataTableStylingModule),
    path: 'styling'
  },
  {
    loadChildren: './advanced/data-table-advanced.module#DataTableAdvancedModule',
    // loadChildren: () => import('./advanced/data-table-advanced.module')
    //   .then((m) => m.DataTableAdvancedModule),
    path: 'advanced'
  },
  {
    loadChildren: './experimental/data-table-experimental.module#DataTableExperimentalModule',
    // loadChildren: () => import('./experimental/data-table-experimental.module')
    //   .then((m) => m.DataTableExperimentalModule),
    path: 'experimental'
  }
];

/**
 * Application data table feature routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableFeatureRoutes)]
})
export class DataTableFeatureRoutingModule {
}
