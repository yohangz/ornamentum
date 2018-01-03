import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataTableModule, DropdownModule } from '../library';

import { AppComponent } from './app.component';
import { DataTableExampleComponent } from './components/data-table-example/data-table-example.component';
import { DropdownExampleComponent } from './components/dropdown-example/dropdown-example.component';

import { AppRoutingModule } from './app-routing.module';

const COMPONENTS = [
  AppComponent,
  DataTableExampleComponent,
  DropdownExampleComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule.forRoot(),
    DropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
