import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Represent application dropdown feature module routes.
 */
const dropdownFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    loadChildren: './overview/dropdown-overview.module#DropdownOverviewModule',
    // loadChildren: () => import('./overview/dropdown-overview.module')
    //   .then((m) => m.DropdownOverviewModule),
    path: 'overview'
  },
  {
    loadChildren: './data-binding/dropdown-data-binding.module#DropdownDataBindingModule',
    // loadChildren: () => import('./data-binding/dropdown-data-binding.module')
    //   .then((m) => m.DropdownDataBindingModule),
    path: 'data-binding'
  },
  {
    loadChildren: './functionality/dropdown-functionality.module#DropdownFunctionalityModule',
    // loadChildren: () => import('./functionality/dropdown-functionality.module')
    //   .then((m) => m.DropdownFunctionalityModule),
    path: 'functionality'
  },
  {
    loadChildren: './templating/dropdown-templating.module#DropdownTemplatingModule',
    // loadChildren: () => import('./templating/dropdown-templating.module')
    //   .then((m) => m.DropdownTemplatingModule),
    path: 'templating'
  },
  {
    loadChildren: './styling/dropdown-styling.module#DropdownStylingModule',
    // loadChildren: () => import('./styling/dropdown-styling.module')
    //   .then((m) => m.DropdownStylingModule),
    path: 'styling'
  },
  {
    loadChildren: './advanced/dropdown-advanced.module#DropdownAdvancedModule',
    // loadChildren: () => import('./advanced/dropdown-advanced.module')
    //   .then((m) => m.DropdownAdvancedModule),
    path: 'advanced'
  }
];

/**
 * Application dropdown feature routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeatureRoutes)]
})
export class DropdownFeatureRoutingModule {
}
