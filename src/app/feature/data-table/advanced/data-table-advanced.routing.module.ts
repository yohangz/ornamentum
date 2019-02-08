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
    loadChildren: './data-table-events/data-table-events.module#DataTableEventsModule',
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
    loadChildren: './data-table-state-persistence/data-table-state-persistence.module#DataTableStatePersistenceModule',
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
    loadChildren: './data-table-translations/data-table-translations.module#DataTableTranslationsModule',
    path: 'translations',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Translations',
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
