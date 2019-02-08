import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownServerSideWebSocketComponent } from './index';

/**
 * Represent server side web socket data binding routes.
 */
const dropdownServerSideWebSocketRoutes: Routes = [
  {
    component: DropdownServerSideWebSocketComponent,
    path: ''
  }
];

/**
 * Dropdown server side server side web socket data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownServerSideWebSocketRoutes)]
})
export class DropdownServerSideWebSocketRoutingModule {
}
