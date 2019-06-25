import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table advanced routes.
 */
const dataTableAdvancedRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'events'
  },
  {
    loadChildren: () => import('./data-table-events/data-table-events.module')
      .then((m) => m.DataTableEventsModule),
    path: 'events',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Events',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-state-persistence/data-table-state-persistence.module')
      .then((m) => m.DataTableStatePersistenceModule),
    path: 'state-persistence',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | State Persistence',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-translations/data-table-translations.module')
      .then((m) => m.DataTableTranslationsModule),
    path: 'translations',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Translations',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-config-overriding/data-table-config-overriding.module')
      .then((m) => m.DataTableConfigOverridingModule),
    path: 'config-overriding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Advanced | Configuration Overriding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Data table advanced routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableAdvancedRoutes)]
})
export class DataTableAdvancedRoutingModule {
}
