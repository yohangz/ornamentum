import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown advanced module routes.
 */
const dropdownAdvancedRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'load-data-on-init'
  },
  {
    loadChildren: './dropdown-load-data-on-init/dropdown-load-data-on-init.module#DropdownLoadDataOnInitModule',
    // loadChildren: () => import('./dropdown-load-data-on-init/dropdown-load-data-on-init.module')
    //   .then((m) => m.DropdownLoadDataOnInitModule),
    path: 'load-data-on-init',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Load Data On Init',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-events/dropdown-events.module#DropdownEventsModule',
    // loadChildren: () => import('./dropdown-events/dropdown-events.module')
    //   .then((m) => m.DropdownEventsModule),
    path: 'events',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Events',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-translations/dropdown-translations.module#DropdownTranslationsModule',
    // loadChildren: () => import('./dropdown-translations/dropdown-translations.module')
    //   .then((m) => m.DropdownTranslationsModule),
    path: 'translations',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Translations',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-config-overriding/dropdown-config-overriding.module#DropdownConfigOverridingModule',
    // loadChildren: () => import('./dropdown-config-overriding/dropdown-config-overriding.module')
    //   .then((m) => m.DropdownConfigOverridingModule),
    path: 'config-overriding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Advanced | Configuration Overriding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown advanced routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownAdvancedRoutes)]
})
export class DropdownAdvancedRoutingModule {
}
