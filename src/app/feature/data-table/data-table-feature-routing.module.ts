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
    path: 'overview'
  },
  {
    loadChildren: './data-binding/data-table-data-binding.module#DataTableDataBindingModule',
    path: 'data-binding'
  },
  {
    loadChildren: './functionality/data-table-functionality.module#DataTableFunctionalityModule',
    path: 'functionality'
  },
  {
    loadChildren: './templating/data-table-templating.module#DataTableTemplatingModule',
    path: 'templating'
  },
  {
    loadChildren: './options/data-table-options.module#DataTableOptionsModule',
    path: 'options'
  },
  {
    loadChildren: './styling/data-table-styling.module#DataTableStylingModule',
    path: 'styling'
  },
  {
    loadChildren: './advanced/data-table-advanced.module#DataTableAdvancedModule',
    path: 'advanced'
  },
  {
    loadChildren: './experimental/data-table-experimental.module#DataTableExperimentalModule',
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
