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
    path: 'client-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Client Side | Basic Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-client-side-stream/data-table-client-side-stream.module#DataTableClientSideStreamModule',
    path: 'client-side/stream',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Data Binding | Client Side | Stream Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren:
    './data-table-server-side-basic/data-table-server-side-basic.module#DataTableServerSideBasicModule',
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
