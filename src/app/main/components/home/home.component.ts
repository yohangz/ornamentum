import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { VERSION } from '../../../../environments/version';

/**
 * Documentation home page view component.
 * @class HomeComponent
 */
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public currentYear: Number;
  public packageVersion: string;

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Ornamentum | Angular Data Table');

    this.meta.updateTag({
      name: 'keywords',
      content: 'angular,grid,data table,angular 6,ngx,dropdown,ngx-grid,ngx-data-table'
    });

    this.meta.updateTag( {
      name: 'description',
      content: 'Lightweight, highly configurable, feature rich, UI framework agnostic full responsive Angular ' +
      'data table with minimal dependencies'
    });

    this.currentYear = (new Date()).getFullYear();
    this.packageVersion = VERSION;
  }
}

