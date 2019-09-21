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
    // loadChildren: () => import('./data-table-events/data-table-events.module')
    //   .then((m) => m.DataTableEventsModule),
    path: 'events',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Events',
        keywords: 'events,data table events,data grid events,data table interaction tracker,data table lifecycle',
        // tslint:disable-next-line
        description: 'Data table exposed events allow you to hook in to table rendering lifecycle, change behaviors, and capture user interactions.'
      }
    }
  },
  {
    loadChildren: './data-table-state-persistence/data-table-state-persistence.module#DataTableStatePersistenceModule',
    // loadChildren: () => import('./data-table-state-persistence/data-table-state-persistence.module')
    //   .then((m) => m.DataTableStatePersistenceModule),
    path: 'state-persistence',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | State Persistence',
        keywords: 'state persistence,persistence state,save table state,save grid state,maintain table state,maintain grid state',
        description: 'Persist data table state across route navigations and browser sessions depending on state persistence mode.'
      }
    }
  },
  {
    loadChildren: './data-table-translations/data-table-translations.module#DataTableTranslationsModule',
    // loadChildren: () => import('./data-table-translations/data-table-translations.module')
    //   .then((m) => m.DataTableTranslationsModule),
    path: 'translations',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Translations',
        keywords: 'translations,localization,translation,localize table content,localize grid content',
        description: 'Translations feature exposes the capability of localizing the data table control labels and static contents.'
      }
    }
  },
  {
    loadChildren: './data-table-config-overriding/data-table-config-overriding.module#DataTableConfigOverridingModule',
    // loadChildren: () => import('./data-table-config-overriding/data-table-config-overriding.module')
    //   .then((m) => m.DataTableConfigOverridingModule),
    path: 'config-overriding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Advanced | Configuration Overriding',
        // tslint:disable-next-line
        keywords: 'configuration,config,configuration override,data table configuration,data table config,root configuration,global configuration',
        description: 'Data table default behaviors or configurations can be customized in component usage and module root.'
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
