@Component({
  ...
})
export class ServerSideBasicUsageComponent {
  public onDataBind: DropdownDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DropdownHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
  }
}
