import {HttpClientModule} from "@angular/common/http";

@NgModule({
 ...
 imports: [
    ...
    HttpClientModule, // Import http client module which is required for server side basic data binding
    DataTableModule.forRoot(), // Import data table module
    DataTableResourceModule.forRoot() // Import data table resource module
  ]
})
