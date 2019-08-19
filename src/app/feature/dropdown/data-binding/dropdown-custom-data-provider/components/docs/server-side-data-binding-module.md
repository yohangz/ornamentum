import {HttpClientModule} from "@angular/common/http";

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

@NgModule({
 ...
 imports: [
    ...
    HttpClientModule, // Import http client module which is required for server side basic data binding
    DropdownModule.forRoot(), // Import dropdown module
    DropdownResourceModule.forRoot() // Import dropdown resource module
  ]
})
