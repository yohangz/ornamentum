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
    // loadChildren: () => import('./dropdown-menu-position/dropdown-menu-position.module')
    //   .then((m) => m.DropdownMenuPositionModule),
    path: 'menu-position',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Functionality | Menu Position',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-menu-width-height/dropdown-menu-width-height.module#DropdownMenuWidthHeightModule',
    // loadChildren: () => import('./dropdown-menu-width-height/dropdown-menu-width-height.module')
    //   .then((m) => m.DropdownMenuWidthHeightModule),
    path: 'menu-width-height',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Functionality | Menu Width & Height',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-themes/dropdown-themes.module#DropdownThemesModule',
    // loadChildren: () => import('./dropdown-themes/dropdown-themes.module')
    //   .then((m) => m.DropdownThemesModule),
    path: 'themes',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Dropdown | Styling | Themes | User Experience',
        // tslint:disable-next-line
        keywords: 'ornamentum dropdown themes,dropdown themes,dropdown list themes,dropdown base theme,dropdown dark theme,dropdown flat theme,dropdown ornamentum theme,dropdown aegean theme',
        // tslint:disable-next-line
        description: 'Ornamentum dropdown list has a variety of predefined themes which you can apply to your application. Greater selection of themes are available with different colour variations to chose from.'
      }
    }
  },
  {
    loadChildren: './dropdown-custom-theming/dropdown-custom-theming.module#DropdownCustomThemingModule',
    // loadChildren: () => import('./dropdown-custom-theming/dropdown-custom-theming.module')
    //   .then((m) => m.DropdownCustomThemingModule),
    path: 'custom-theming',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum -Dropdown | Customization | Themes | User Experience',
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
