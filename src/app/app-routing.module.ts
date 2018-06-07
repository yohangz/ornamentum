import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/components';

import { MenuItem } from './core/models';

const dropdownNavigationData: MenuItem[] = [
  {
    routePath: 'overview',
    title: 'Overview',
  },
  {
    routePath: 'data-binding',
    title: 'Data binding',
  },
  {
    routePath: 'editing',
    title: 'Editing',
  },
  {
    routePath: 'filtering',
    title: 'Filtering',
  },
  {
    routePath: 'grouping',
    title: 'Grouping',
  },
  {
    routePath: 'pagination',
    title: 'Pagination',
  },
  {
    routePath: 'sorting',
    title: 'Sorting',
  }
];

const dataTableNavigationData: MenuItem[] = [
  {
    routePath: '/data-table/overview',
    title: 'Overview'
  },
  {
    routePath: '/data-table/client-side-data-binding',
    title: 'Client Side Data Binding',
  },
  {
    routePath: '/data-table/server-side-data-binding',
    title: 'Server Side Data Binding'
  },
  {
    routePath: '/data-table/real-time-data-binding',
    title: 'Real Time Data Binding'
  },
  {
    routePath: '/data-table/pagination',
    title: 'Pagination'
  },
  {
    routePath: '/data-table/column/sorting',
    title: 'Column Sorting'
  },
  {
    routePath: '/data-table/grouping',
    title: 'Row Grouping'
  },
  {
    routePath: '/data-table/column/filtering',
    title: 'Filtering'
  },
  {
    routePath: '/data-table/row-selection',
    title: 'Row Selection'
  },
  {
    routePath: '/data-table/column/resizable',
    title: 'Column Resizing'
  },
  {
    routePath: '/data-table/data-persistence',
    title: 'Data Persistence'
  },
  {
    routePath: '/data-table/substitute-rows',
    title: 'Substitute Rows'
  },
  {
    routePath: '/data-table/loading-spinner',
    title: 'Data Loading Spinner'
  },
  {
    routePath: '/data-table/templates/cell-template',
    title: 'Cell Template'
  },
  {
    routePath: '/data-table/templates/expand-template',
    title: 'Row Expand Template'
  },
  {
    routePath: '/data-table/templates/loading-spinner-template',
    title: 'Loading Spinner Template'
  },
  {
    routePath: '/data-table/templates/no-records-template',
    title: 'No Records Template'
  },
  {
    routePath: '/data-table/limit',
    title: 'Data Limit'
  },
  {
    routePath: '/data-table/header-details',
    title: 'Header Details'
  },
  {
    routePath: '/data-table/responsive-configuration',
    title: 'Responsive Configuration'
  },
  {
    routePath: '/data-table/translations',
    title: 'Translations'
  },
  // {
  //   routePath: '/data-table/events/init',
  //   title: 'init'
  // },
  // {
  //   routePath: '/data-table/events/allRowSelectChange',
  //   title: 'allRowSelectChange'
  // },
  // {
  //   routePath: '/data-table/events/rowBind',
  //   title: 'rowBind'
  // },
  // {
  //   routePath: '/data-table/events/rowSelectChange',
  //   title: 'rowSelectChange'
  // },
  // {
  //   routePath: '/data-table/events/cellBind',
  //   title: 'cellBind'
  // },
  // {
  //   routePath: '/data-table/events/cellClick',
  //   title: 'cellClick'
  // },
  // {
  //   routePath: '/data-table/events/columnBind',
  //   title: 'columnBind'
  // },
  // {
  //   routePath: '/data-table/events/dataBound',
  //   title: 'dataBound'
  // },
  // {
  //   routePath: '/data-table/events/headerClick',
  //   title: 'headerClick'
  // },
  // {
  //   routePath: '/data-table/events/rowClick',
  //   title: 'rowClick'
  // },
  // {
  //   routePath: '/data-table/events/rowDoubleClick',
  //   title: 'rowDoubleClick'
  // }
];

/**
 * Represent application main routes.
 * @type Routes
 */
const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data-table'
  },
  {
    component: MainComponent,
    loadChildren: './feature/data-table/data-table-feature.module#DataTableFeatureModule',
    path: 'data-table',
    data: {
      navigation: dataTableNavigationData
    }
  },
  {
    component: MainComponent,
    loadChildren: './feature/dropdown/dropdown-feature.module#DropdownFeatureModule',
    path: 'dropdown',
    data: {
      navigation: dropdownNavigationData
    }
  }
];

/**
 * Application routing module.
 * @class AppRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {
}

