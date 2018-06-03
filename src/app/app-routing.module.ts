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
    routePath: 'paging',
    title: 'Paging',
  },
  {
    routePath: 'sorting',
    title: 'Sorting',
  }
];

const dataTableNavigationData: MenuItem[] = [
  {
    title: 'Overview',
    routePath: '/data-table/overview',
  },
  {
    routePath: '/client-side-data-binding',
    title: 'Client Side Data Binding',
  },
  {
    routePath: '/server-side-data-binding',
    title: 'Server Side Data Binding'
  },
  {
    routePath: '/real-time-data-binding',
    title: 'Real Time Data Binding'
  },
  {
    routePath: '/paging',
    title: 'Paging'
  },
  {
    routePath: '/translations',
    title: 'Translations'
  },
  {
    routePath: '/header-details',
    title: 'Header Details'
  },
  {
    routePath: '/data-persistence',
    title: 'Data Persistence'
  },
  {
    routePath: '/limit',
    title: 'Data Limit'
  },
  {
    routePath: '/substitute-rows',
    title: 'Substitute Rows'
  },
  {
    routePath: '/responsive-configuration',
    title: 'Responsive Configuration'
  },
  {
    routePath: '/loading-spinner',
    title: 'Data Loading Spinner'
  },
  {
    routePath: '/grouping',
    title: 'Grouping'
  },
  {
    routePath: '/row-selection',
    title: 'Row Selection'
  },
  {
    routePath: 'column/filtering',
    title: 'Filtering'
  },
  {
    routePath: 'column/sorting',
    title: 'Sorting'
  },
  {
    routePath: 'column/resizable',
    title: 'Resizable'
  },
  {
    routePath: 'events/init',
    title: 'init'
  },
  {
    routePath: 'events/allRowSelectChange',
    title: 'allRowSelectChange'
  },
  {
    routePath: 'events/rowBind',
    title: 'rowBind'
  },
  {
    routePath: 'events/rowSelectChange',
    title: 'rowSelectChange'
  },
  {
    routePath: 'events/cellBind',
    title: 'cellBind'
  },
  {
    routePath: 'events/cellClick',
    title: 'cellClick'
  },
  {
    routePath: 'events/columnBind',
    title: 'columnBind'
  },
  {
    routePath: 'events/dataBound',
    title: 'dataBound'
  },
  {
    routePath: 'events/headerClick',
    title: 'headerClick'
  },
  {
    routePath: 'events/rowClick',
    title: 'rowClick'
  },
  {
    routePath: 'events/rowDoubleClick',
    title: 'rowDoubleClick'
  }
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

