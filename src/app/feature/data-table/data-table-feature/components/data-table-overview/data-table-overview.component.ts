import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-overview-component',
  templateUrl: './data-table-overview.component.html',
  styleUrls: ['./data-table-overview.component.scss']
})
export class DataTableOverviewComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  public install_code = ` 
   npm install ornamentum`;

  public import_code = ` 
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
      
   import { DataTableModule } from 'ornamentum';
      
   import { AppComponent } from './app.component';

   @NgModule({
     bootstrap: [AppComponent],
     declarations: [AppComponent],
     imports: [BrowserModule, DataTableModule.forRoot()]
    })
    export class AppModule {
    }`;

  constructor() {
    this.items = of(sampleData);
  }
}
