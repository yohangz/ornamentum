import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown feature module routes.
 */
const dropdownFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client-side/basic'
  },
  {
    loadChildren: './dropdown-client-side-basic/dropdown-client-side-basic.module#DropdownClientSideBasicModule',
    // loadChildren: () => import('./dropdown-client-side-basic/dropdown-client-side-basic.module')
    //   .then((m) => m.DropdownClientSideBasicModule),
    path: 'client-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Client Side | Basic Data Binding',
        keywords: 'ornamentum,dropdown data binding,dropdown client side data binding,dropdown basic data binding',
        // tslint:disable-next-line
        description: 'Client side data binding allow users to bind static data sets to dropdown when full data collection is available in the client side.'
      }
    }
  },
  {
    loadChildren: './dropdown-client-side-stream/dropdown-client-side-stream.module#DropdownClientSideStreamModule',
    // loadChildren: () => import('./dropdown-client-side-stream/dropdown-client-side-stream.module')
    //   .then((m) => m.DropdownClientSideStreamModule),
    path: 'client-side/stream',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Client Side | Stream Data Binding',
        keywords: 'ornamentum,dropdown data binding,dropdown client side stream data binding,stream data binding',
        // tslint:disable-next-line
        description: 'The client side stream data binding technique to bind data sources which changes rapidly. Data changes notified by data source will automatically get reflected while persisting the current dropdown state without having to manually trigger refresh.'
      }
    }
  },
  {
    loadChildren: './dropdown-server-side-basic/dropdown-server-side-basic.module#DropdownServerSideBasicModule',
    // loadChildren: () => import('./dropdown-server-side-basic/dropdown-server-side-basic.module')
    //   .then((m) => m.DropdownServerSideBasicModule),
    path: 'server-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Server Side | Basic Data Binding',
        // tslint:disable-next-line
        keywords: 'ornamentum,dropdown data binding,dropdown server side stream data binding,custom data binding,basic server side data binding',
        // tslint:disable-next-line
        description: 'Server side data binding allow users to bind large data sets that are not directly accessible as a full collection in client side due to various reasons. Server side data binding can improve performance drastically for large data sets but integration is fairly complex compared to client side data binding techniques.'
      }
    }
  },
  {
    loadChildren: './dropdown-server-side-web-socket/dropdown-server-side-web-socket.module#DropdownServerSideWebSocketModule',
    // loadChildren: () => import('./dropdown-server-side-web-socket/dropdown-server-side-web-socket.module')
    //   .then((m) => m.DropdownServerSideWebSocketModule),
    path: 'server-side/web-socket',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Server Side | Web Socket Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-custom-data-provider/dropdown-custom-data-provider.module#DropdownCustomDataProviderModule',
    path: 'server-side/custom-provider',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown| Data Binding | Server Side | Custom Data Provider',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeatureRoutes)]
})
export class DropdownDataBindingRoutingModule {
}
