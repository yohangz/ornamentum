import { Component, Input } from '@angular/core';

import { MenuItem, Navigation } from '../../models';

import { ScrollService } from '../../services';

@Component({
  selector: 'app-right-navigation',
  templateUrl: './right-navigation.component.html',
  styleUrls: ['./right-navigation.component.scss']
})
export class RightNavigationComponent {
  @Input()
  public parent: Element;

  @Input()
  public menuItem: MenuItem;

  constructor(private scrollService: ScrollService) {}

  public scrollToHash(navigation: Navigation): void {
    this.scrollService.scrollToHash(this.parent, navigation.anchor);
  }
}
