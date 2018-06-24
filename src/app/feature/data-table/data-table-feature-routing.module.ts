import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../core/seo.guard';

import {
  DataTableFilteringComponent,
  DataTableOverviewComponent,
  DataTableColumnSortingComponent,
  DataTableRowGroupingComponent,
  DataTableRowSelectionComponent,
  DataTableResizableComponent,
  DataTablePaginationComponent,
  DataTableTranslationsComponent,
  DataTableHeaderDetailsComponent,
  DataTablePersistDataComponent,
  DataTableSubstituteRowsComponent,
  DataTableLimitComponent,
  DataTableResponsiveConfComponent,
  DataTableClientSideDataBindingComponent,
  DataTableServerSideDataBindingComponent,
  DataTableLoadingSpinnerComponent,
  DataTableCellTemplateComponent,
  DataTableRowExpandTemplateComponent,
  DataTableRealTimeDataBindingComponent,
  DataTableNoRecordsTemplateComponent,
  DataTableLoadingSpinnerTemplateComponent,
  DataTableEventsComponent
} from './components';

/**
 * Represent application data table feature module routes.
 * @type Routes
 */
const dataTableFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    component: DataTableOverviewComponent,
    path: 'overview',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table Overview',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableClientSideDataBindingComponent,
    path: 'client-side-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Client Side Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableServerSideDataBindingComponent,
    path: 'server-side-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Server Side Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableRealTimeDataBindingComponent,
    path: 'real-time-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Real Time Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTablePaginationComponent,
    path: 'pagination',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Pagination',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableTranslationsComponent,
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
    component: DataTableHeaderDetailsComponent,
    path: 'header-details',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Header Details',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTablePersistDataComponent,
    path: 'data-persistence',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Data Persistence',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableLimitComponent,
    path: 'limit',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Data Limit',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableSubstituteRowsComponent,
    path: 'substitute-rows',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Substitute Rows',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableResponsiveConfComponent,
    path: 'responsive-configuration',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Responsive Configuration',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableLoadingSpinnerComponent,
    path: 'loading-spinner',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Data Loading Spinner',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableRowGroupingComponent,
    path: 'grouping',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Row Grouping',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableRowSelectionComponent,
    path: 'row-selection',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Row Selection',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableFilteringComponent,
    path: 'column/filtering',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Filtering',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableColumnSortingComponent,
    path: 'column/sorting',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Column Sorting',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableResizableComponent,
    path: 'column/resizable',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Column Resizing',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableEventsComponent,
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
    component: DataTableCellTemplateComponent,
    path: 'templates/cell-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Templating | Cell Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableRowExpandTemplateComponent,
    path: 'templates/expand-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Templating | Row Expand Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableNoRecordsTemplateComponent,
    path: 'templates/no-records-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Templating | No Records Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    component: DataTableLoadingSpinnerTemplateComponent,
    path: 'templates/loading-spinner-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Templating | Loading Spinner Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application data table feature routing module.
 * @class DataTableFeatureRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableFeatureRoutes)]
})
export class DataTableFeatureRoutingModule {
}
