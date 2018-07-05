import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup, MenuItem, ResizeArgs } from '../../models';
import { ContainerResponsiveService } from '../../services';


@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit, OnDestroy {
  private containerResponsiveSubscription: Subscription;
  private navigationToggleSubscription: Subscription;

  @Input()
  public menuGroups: MenuGroup[];

  @ViewChild('searchBox')
  public searchBox: ElementRef;

  public containerHeight: number;
  public expanded =  false;
  public displayMenuGroups: MenuGroup[];

  constructor(private containerResponsive: ContainerResponsiveService) {
    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((resizeArgs: ResizeArgs) => {
      this.containerHeight = resizeArgs.containerHeight;
    });

    this.navigationToggleSubscription = this.containerResponsive.navigationToggle.subscribe(() => {
      this.expanded = !this.expanded;
    });
  }

  public get menuHeight(): number {
    return this.containerHeight - this.searchBox.nativeElement.offsetHeight - 32;
  }

  public closeMenu(): void {
    this.expanded = false;
  }

  public onSearchKeyUp(element: any): void {
    const value = element.value;

    this.displayMenuGroups = this.menuGroups.reduce((acc: MenuGroup[], menuGroup: MenuGroup) => {
      const items = menuGroup.menuItems.filter((menuItem: MenuItem) => {
        return menuItem.title.toLowerCase().includes(value.toLowerCase());
      });

      if (items.length) {
        acc.push({
          name: menuGroup.name,
          menuItems: items
        });
      }

      return acc;
    }, []);
  }

  public ngOnInit(): void {
    this.displayMenuGroups = this.menuGroups;
  }

  public ngOnDestroy(): void {
    this.containerResponsiveSubscription.unsubscribe();
    this.navigationToggleSubscription.unsubscribe();
  }
}
