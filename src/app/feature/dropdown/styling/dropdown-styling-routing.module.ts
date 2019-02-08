import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown styling module routes.
 */
const dropdownStylingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu-position'
  },
  {
    loadChildren: './dropdown-menu-position/dropdown-menu-position.module#DropdownMenuPositionModule',
    path: 'menu-position',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Menu Position',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-menu-width-height/dropdown-menu-width-height.module#DropdownMenuWidthHeightModule',
    path: 'menu-width-height',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Functionality | Menu Width & Height',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-themes/dropdown-themes.module#DropdownThemesModule',
    path: 'themes',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Styling | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-custom-theming/dropdown-custom-theming.module#DropdownCustomThemingModule',
    path: 'custom-theming',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum |Dropdown | Customization | Themes | User Experience',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown styling routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownStylingRoutes)]
})
export class DropdownStylingRoutingModule {
}
