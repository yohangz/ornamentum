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
    loadChildren: () => import('./dropdown-client-side-basic/dropdown-client-side-basic.module')
      .then((m) => m.DropdownClientSideBasicModule),
    path: 'client-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Client Side | Basic Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./dropdown-client-side-stream/dropdown-client-side-stream.module')
      .then((m) => m.DropdownClientSideStreamModule),
    path: 'client-side/stream',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Client Side | Stream Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./dropdown-server-side-basic/dropdown-server-side-basic.module')
      .then((m) => m.DropdownServerSideBasicModule),
    path: 'server-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Server Side | Basic Data Binding',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./dropdown-server-side-web-socket/dropdown-server-side-web-socket.module')
      .then((m) => m.DropdownServerSideWebSocketModule),
    path: 'server-side/web-socket',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Data Binding | Server Side | Web Socket Data Binding',
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
