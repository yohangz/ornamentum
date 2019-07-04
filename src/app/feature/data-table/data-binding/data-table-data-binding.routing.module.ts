import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table data binding routes.
 */
const dataTableDataBindingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client-side/basic'
  },
  {
    loadChildren: './data-table-client-side-basic/data-table-client-side-basic.module#DataTableClientSideBasicModule',
    // loadChildren: () => import('./data-table-client-side-basic/data-table-client-side-basic.module')
    //   .then((m) => m.DataTableClientSideBasicModule),
    path: 'client-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Client Side | Basic Data Binding',
        keywords: 'ornamentum,datatable data binding,datatable client side data binding,datatable basic data binding',
        // tslint:disable-next-line
        description: 'Client side data binding allow users to bind static data sets to data table when full data collection is available in the client side'
      }
    }
  },
  {
    loadChildren: './data-table-client-side-stream/data-table-client-side-stream.module#DataTableClientSideStreamModule',
    // loadChildren: () => import('./data-table-client-side-stream/data-table-client-side-stream.module')
    //   .then((m) => m.DataTableClientSideStreamModule),
    path: 'client-side/stream',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Client Side | Stream Data Binding',
        keywords: 'ornamentum,datatable data binding,datatable client side stream data binding,stream data binding',
        // tslint:disable-next-line
        description: 'The client side stream data binding technique to bind data sources which changes rapidly. Data changes notified by data source will automatically get reflected while persisting the current table state without having to manually trigger refresh'
      }
    }
  },
  {
    loadChildren:
      './data-table-server-side-basic/data-table-server-side-basic.module#DataTableServerSideBasicModule',
    // loadChildren: () => import('./data-table-server-side-basic/data-table-server-side-basic.module')
    //   .then((m) => m.DataTableServerSideBasicModule),
    path: 'server-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Server Side | Basic Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren:
      './data-table-server-side-web-socket/data-table-server-side-web-socket.module#DataTableServerSideWebSocketModule',
    // loadChildren: () => import('./data-table-server-side-web-socket/data-table-server-side-web-socket.module')
    //   .then((m) => m.DataTableServerSideWebSocketModule),
    path: 'server-side/web-socket',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Server Side | Web Socket Data Binding',
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
  imports: [RouterModule.forChild(dataTableDataBindingRoutes)]
})
export class DataTableDataBindingRoutingModule {
}
