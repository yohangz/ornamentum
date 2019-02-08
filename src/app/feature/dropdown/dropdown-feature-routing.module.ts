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
    path: 'overview'
  },
  {
    loadChildren: './data-binding/dropdown-data-binding.module#DropdownDataBindingModule',
    path: 'data-binding'
  },
  {
    loadChildren: './options/dropdown-options.module#DropdownOptionsModule',
    path: 'options'
  },
  {
    loadChildren: './features/dropdown-features.module#DropdownFeaturesModule',
    path: 'features'
  },
  {
    loadChildren: './templating/dropdown-templating.module#DropdownTemplatingModule',
    path: 'templating'
  },
  {
    loadChildren: './styling/dropdown-styling.module#DropdownStylingModule',
    path: 'styling'
  },
  {
    loadChildren: './advanced/dropdown-advanced.module#DropdownAdvancedModule',
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
