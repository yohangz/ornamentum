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
    this.title.setTitle('Ornamentum | Angular Data Table');

    this.meta.updateTag({
      name: 'keywords',
      content: 'angular,grid,data table,angular 6,ngx,dropdown,ngx-grid,ngx-data-table'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Lightweight, highly configurable, feature rich, UI framework agnostic full responsive Angular '
        + 'data table with minimal dependencies'
    });
  }
}
