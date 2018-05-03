import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataTableModule, DropdownModule } from '../library';

import { AppComponent } from './app.component';
import { DataTableExampleComponent } from './components/data-table-example/data-table-example.component';
import { DropdownExampleComponent } from './components/dropdown-example/dropdown-example.component';

import { DataStorageService } from './services/data-storage.service';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DropdownModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
