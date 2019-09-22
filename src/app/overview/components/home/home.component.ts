import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * Documentation home page view component.
 */
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Ornamentum - Angular Data Table');

    this.meta.updateTag({
      name: 'keywords',
      // tslint:disable-next-line
      content: 'angular,grid,data table,angular 2+,ngx,dropdown,angular data table,angular data grid,reactive grid,responsive grid,ngx-grid,ngx-data-table'
    });

    this.meta.updateTag({
      name: 'description',
      // tslint:disable-next-line
      content: 'Lightweight, highly configurable, feature rich, UI framework agnostic fully responsive, reactive Angular data table with minimal dependencies'
    });
  }
}
