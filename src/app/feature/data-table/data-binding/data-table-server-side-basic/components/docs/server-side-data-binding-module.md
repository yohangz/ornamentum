import {HttpClientModule} from '@angular/common/http';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

@NgModule({
 ...
 imports: [
    ...
    HttpClientModule, // Import http client module which is required for server side basic data binding
    DataTableModule.forRoot(), // Import data table module
    DataTableResourceModule.forRoot() // Import data table resource module
  ]
})
