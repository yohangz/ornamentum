import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { MenuGroup } from '../../models';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {
  @Input()
  public menuGroups: MenuGroup[];

  @Input()
  public height: number;

  @ViewChild('searchBox')
  public searchBox: ElementRef;

  public get menuHeight(): number {
    return this.height - this.searchBox.nativeElement.offsetHeight;
  }
}
