import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../core/seo.guard';

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
    loadChildren: './data-table-overview/data-table-overview.module#DataTableOverviewModule',
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
    loadChildren: './data-table-client-side-data-binding/data-table-client-side-data-binding.module#DataTableClientSideDataBindingModule',
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
    loadChildren: './data-table-server-side-data-binding/data-table-server-side-data-binding.module#DataTableServerSideDataBindingModule',
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
    loadChildren: './data-table-client-side-real-time-data-binding/data-table-client-side-real-time-data-binding.module#DataTableClientSideRealTimeDataBindingModule',
    path: 'client-side-real-time-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Client SIde Data Binding | Real Time Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-server-side-real-time-data-binding/data-table-server-side-real-time-data-binding.module#DataTableServerSideRealTimeDataBindingModule',
    path: 'server-side-real-time-data-binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Server Side Data Binding | Real Time Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-pagination/data-table-pagination.module#DataTablePaginationModule',
    path: 'pagination',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Pagination',
        keywords: 'Pagination, Pageable, Ornamentum, How to enable Pagination in Ornamentum',
        description:
          'How to enable pagination for the Ornamentum data table, everything to do with pagination and related properties, ' + 'with examples.'
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
  },
  {
    loadChildren: './data-table-header-details/data-table-header-details.module#DataTableHeaderDetailsModule',
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
    loadChildren: './data-table-persist-data/data-table-persist-data.module#DataTablePersistDataModule',
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
    loadChildren: './data-table-substitute-rows/data-table-substitute-rows.module#DataTableSubstituteRowsModule',
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
    loadChildren: './data-table-responsive-conf/data-table-responsive-conf.module#DataTableResponsiveConfModule',
    path: 'responsive-configuration',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Responsive Configurations',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-loading-spinner/data-table-loading-spinner.module#DataTableLoadingSpinnerModule',
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
    loadChildren: './data-table-row-grouping/data-table-row-grouping.module#DataTableRowGroupingModule',
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
    loadChildren: './data-table-row-selection/data-table-row-selection.module#DataTableRowSelectionModule',
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
    loadChildren: './data-table-filtering/data-table-filtering.module#DataTableFilteringModule',
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
    loadChildren: './data-table-column-sorting/data-table-column-sorting.module#DataTableColumnSortingModule',
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
    loadChildren: './data-table-column-resizing/data-table-column-resizing.module#DataTableColumnResizingModule',
    path: 'column/resizing',
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
    loadChildren: './data-table-cell-template/data-table-cell-template.module#DataTableCellTemplateModule',
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
    loadChildren: './data-table-row-expand-template/data-table-row-expand-template.module#DataTableRowExpandTemplateModule',
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
    loadChildren: './data-table-no-records-template/data-table-no-records-template.module#DataTableNoRecordsTemplateModule',
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
    loadChildren: './data-table-loading-spinner-template/data-table-loading-spinner-template.module#DataTableLoadingSpinnerTemplateModule',
    path: 'templates/loading-spinner-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Templating | Loading Spinner Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-styling-and-themes/data-table-styling-and-themes.module#DataTableStylingAndThemesModule',
    path: 'styling-and-themes',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Styling | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-custom-theming/data-table-custom-theming.module#DataTableCustomThemingModule',
    path: 'custom-theming',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Customize | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
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
