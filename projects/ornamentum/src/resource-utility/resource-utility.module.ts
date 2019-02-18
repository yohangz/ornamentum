import { ModuleWithProviders, NgModule } from '@angular/core';

import { RequestParamMapperService } from './services/request-param-mapper.service';
import { ResourceUtilityConfigService } from './services/resource-utility-config.service';


const PROVIDERS = [RequestParamMapperService];

/**
 * Resource utility module.
 */
@NgModule({
  imports: [],
  providers: [...PROVIDERS]
})
export class ResourceUtilityModule {
  /**
   * Set module root configuration overrides.
   * @return Module with custom providers.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ResourceUtilityModule,
      providers: [ResourceUtilityConfigService]
    };
  }
}
