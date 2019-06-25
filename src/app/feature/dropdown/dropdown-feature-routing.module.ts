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
    loadChildren: () => import('./overview/dropdown-overview.module')
      .then((m) => m.DropdownOverviewModule),
    path: 'overview'
  },
  {
    loadChildren: () => import('./data-binding/dropdown-data-binding.module')
      .then((m) => m.DropdownDataBindingModule),
    path: 'data-binding'
  },
  {
    loadChildren: () => import('./options/dropdown-options.module')
      .then((m) => m.DropdownOptionsModule),
    path: 'options'
  },
  {
    loadChildren: () => import('./features/dropdown-features.module')
      .then((m) => m.DropdownFeaturesModule),
    path: 'features'
  },
  {
    loadChildren: () => import('./templating/dropdown-templating.module')
      .then((m) => m.DropdownTemplatingModule),
    path: 'templating'
  },
  {
    loadChildren: () => import('./styling/dropdown-styling.module')
      .then((m) => m.DropdownStylingModule),
    path: 'styling'
  },
  {
    loadChildren: () => import('./advanced/dropdown-advanced.module')
      .then((m) => m.DropdownAdvancedModule),
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
