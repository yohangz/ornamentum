import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: ''
})
export class TabComponent {
  public active = false;
  public initialLoad = true;

  @ContentChild('tabContent', { static: true })
  public tabContent: TemplateRef<any>;

  @ContentChild('tabTitle', { static: true })
  public tabTitle: TemplateRef<any>;

  @Input()
  public title: string;

  @Input()
  public disabled = false;

  @Input()
  public id: string;
}
