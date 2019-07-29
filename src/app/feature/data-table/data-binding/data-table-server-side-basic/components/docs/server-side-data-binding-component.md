@Component({
  ...
})
export class ServerSideBasicUsageComponent {
  public onDataBind: DataTableDataBindCallback<ExampleData>;
  
  constructor(private resourceFactory: DataTableHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/resource/path');
    this.onFilterValueExtract = exampleDataResource.onFilterValueExtract('/api/data/filter');
  }
}
