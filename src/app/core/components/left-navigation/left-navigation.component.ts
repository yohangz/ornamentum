import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup, MenuItem, ResizeArgs } from '../../models';
import { ContainerResponsiveService } from '../../services';


@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
  animations: [
    trigger('slide', [
      state('expand', style({
        'left': '0',
        'padding': '0',
        'visibility': 'visible',
      })),
      state('collapsed', style({
        'left': '-250px',
        'box-shadow': 'none',
        'padding': '0',
        'visibility': 'hidden',
      })),
      transition('collapsed <=> expand', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})
export class LeftNavigationComponent implements OnInit, OnDestroy {
  private containerResponsiveSubscription: Subscription;
  private navigationToggleSubscription: Subscription;

  @Input()
  public menuGroups: MenuGroup[];

  @ViewChild('searchBox')
  public searchBox: ElementRef;

  public containerHeight: number;
  public expanded =  true;
  public mobileMode = false;
  public displayMenuGroups: MenuGroup[];

  constructor(private containerResponsive: ContainerResponsiveService) {
    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((resizeArgs: ResizeArgs) => {
      this.containerHeight = resizeArgs.containerHeight;

      this.mobileMode = this.containerResponsive.isMobileMode(resizeArgs.windowWidth);
      this.expanded = !this.mobileMode;
    });

    this.navigationToggleSubscription = this.containerResponsive.navigationToggle.subscribe(() => {
      this.expanded = !this.expanded;
    });
  }

  public get menuHeight(): number {
    return this.containerHeight - this.searchBox.nativeElement.offsetHeight - 30;
  }

  public closeMenu(): void {
    if (this.mobileMode) {
      this.expanded = false;
    }
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
