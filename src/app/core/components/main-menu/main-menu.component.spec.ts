// import { DebugElement } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Router, UrlSegment } from '@angular/router';
//
// import { MainMenuComponent } from './menu-bar.component';
// import { MenuItem } from '../../models/menu-item.model';
// import { UserPriority } from '../../enums/user-priority.enum';
//
// const parseUrlReturnValue = {
//   root: {
//     children: {
//       primary: {
//         segments: [
//           {
//             parameterMap: {},
//             parameters: {},
//             path: 'recommendation'
//           },
//           {
//             parameterMap: {},
//             parameters: {},
//             path: 'kira-configuraion'
//           }
//         ]
//       }
//     }
//   }
// };
//
// const menuItems: MenuItem[] = [
//   {
//     access: UserPriority.ADMIN,
//     items: [
//       {
//         access: UserPriority.ADMIN,
//         routePath: 'kira-configuration',
//         title: 'KIRA CONFIGURATION',
//       },
//       {
//         access: UserPriority.ADMIN,
//         items: [
//           {
//             access: UserPriority.ADMIN,
//             routePath: 'channel-recs',
//             title: 'CHANNEL RECOMMENDATIONS'
//           }
//         ],
//         routePath: 'kira-admin',
//         title: 'KIRA ADMIN',
//       }
//     ],
//     routePath: 'recommendation',
//     title: 'RECOMMENDATIONS',
//   },
//   {
//     access: UserPriority.ADMIN,
//     routePath: 'content',
//     title: 'CONTENT',
//   }
// ];
//
// const routeUrl = 'test/seest/ss';
//
// const userProfile = {
//   priority: UserPriority.ADMIN,
//   userGroup: 'userGroup',
//   userId: 'userID'
// };
//
// class MockRouter {
//
//   readonly url = routeUrl;
//
//   navigateByUrl(): void {
//   }
//
//   parseUrl(): any {
//     return parseUrlReturnValue;
//   }
// }
//
// describe('MainMenuComponent component tests', () => {
//
//   let component: MainMenuComponent;
//   let fixture: ComponentFixture<MainMenuComponent>;
//   let debugElement: DebugElement;
//   let htmlElement: HTMLElement;
//
//   let router: Router;
//
//   beforeEach(async(() => {
//
//
//     TestBed.configureTestingModule({
//       declarations: [MainMenuComponent],
//       imports: [],
//       providers: [{ provide: Router, useClass: MockRouter }]
//     }).compileComponents();
//
//     fixture = TestBed.createComponent(MainMenuComponent);
//
//     component = fixture.componentInstance;
//
//     router = TestBed.get(Router);
//     spyOn(router, 'parseUrl').and.returnValue(parseUrlReturnValue);
//     spyOn(router, 'navigateByUrl');
//
//     const appName = 'Test app name';
//     component.appName = appName;
//     component.menuItems = menuItems;
//     component.profile = userProfile;
//     fixture.detectChanges();
//   }));
//
//   it('Should display app name', () => {
//     const appName = 'Test app name';
//     component.appName = appName;
//     fixture.detectChanges();
//
//     debugElement = fixture.debugElement.query(By.css('.app-name-lg'));
//     htmlElement = debugElement.nativeElement;
//     expect(htmlElement.textContent).toContain(appName);
//   });
//
//   it('should invoke #parseUrl of router when initiating', () => {
//     expect(router.parseUrl).toHaveBeenCalled();
//   });
//
//
//   it('Should toggle menu collapsed state when #toggleMenuCollapse is invoked', () => {
//     const compMenuCollapsedState = false;
//     component.menuCollapsed = compMenuCollapsedState;
//     component.menuItems = menuItems;
//     fixture.detectChanges();
//     debugElement = fixture.debugElement.query(By.css('.zmdi-menu'));
//     debugElement.triggerEventHandler('click', null);
//     expect(component.menuCollapsed).toBe(!compMenuCollapsedState);
//   });
//
//   it('Should hide collapsible menu when #hideCollapsibleMenu is invoked', () => {
//     debugElement = fixture.debugElement.query(By.css('.sticky-top'));
//     debugElement.triggerEventHandler('clickOutside', null);
//     expect(component.menuCollapsed).toBeTruthy();
//   });
//
//   it('Should emit logout event when #onLogout is invoked', () => {
//     component.menuItems = menuItems;
//     fixture.detectChanges();
//     debugElement = fixture.debugElement.query(By.css('.action-button'));
//     debugElement.triggerEventHandler('click', null);
//     component.logout.subscribe((res) => {
//       expect(res).toBe(null);
//     });
//   });
//
//
//   describe('#resetState tests', () => {
//     it('should not change the item active status if passed active parameter is false', () => {
//       const changedMenuItems = menuItems;
//       changedMenuItems[0].active = false;
//       component.resetState(changedMenuItems, false, true);
//       expect(changedMenuItems[0].active).toBeFalsy();
//     });
//
//     it('should not change the item expanded status if passed expand parameter is false', () => {
//       const changedMenuItems = menuItems;
//       changedMenuItems[0].expanded = false;
//       component.resetState(changedMenuItems, true, false);
//       expect(changedMenuItems[0].expanded).toBeFalsy();
//     });
//   });
//
//
//   describe('#initMenuItemActiveState tests', () => {
//     xit('should not have any active menu items when url segments are empty', () => {
//       component.initMenuItemActiveState([], menuItems);
//       const activeMenuItem = menuItems.find((item) => {
//         return item.active;
//       });
//       expect(activeMenuItem).toBe(undefined);
//     });
//
//     it('should have active menu item', () => {
//       const newMenuItems: MenuItem[] = [{
//         access: UserPriority.ADMIN,
//         routePath: 'recommendation',
//         title: 'RECOMMENDATIONS',
//       }];
//
//       const segment = new UrlSegment('recommendation', {});
//       const segments = [segment];
//       component.initMenuItemActiveState(segments, newMenuItems);
//       expect(newMenuItems[0].active).toBeTruthy();
//     });
//   });
//
//
//   describe('#onMenuItemClick tests', () => {
//     it('should not invoke #navugateByUrl of router', () => {
//       component.menuItems = menuItems;
//       fixture.detectChanges();
//       component.onMenuItemClick(menuItems[0]);
//       expect(router.navigateByUrl).not.toHaveBeenCalled();
//     });
//
//     it('should not invoke #navugateByUrl of router', () => {
//       component.menuItems = menuItems;
//       fixture.detectChanges();
//       component.onMenuItemClick(menuItems[0].items[0], menuItems[0]);
//       expect(router.navigateByUrl).not.toHaveBeenCalled();
//     });
//
//     it('should invoke #navugateByUrl of router', () => {
//       const newMenuItems: MenuItem[] = [{
//         access: UserPriority.ADMIN,
//         routePath: 'recommendation',
//         title: 'RECOMMENDATIONS',
//       }];
//       component.menuItems = newMenuItems;
//       fixture.detectChanges();
//       component.onMenuItemClick(newMenuItems[0]);
//       expect(router.navigateByUrl).toHaveBeenCalled();
//     });
//   });
//
//   describe('#menuItemMouseEnter', () => {
//     it('should expand menu item', () => {
//       component.menuItems = menuItems;
//       fixture.detectChanges();
//       component.menuItemMouseEnter(menuItems[0]);
//       expect(menuItems[0].expanded).toBeTruthy();
//     });
//
//     it('should not expand menu item', () => {
//       component.menuItems = menuItems;
//       fixture.detectChanges();
//       component.menuItemMouseEnter(menuItems[1]);
//       expect(menuItems[1].expanded).toBeFalsy();
//     });
//
//     it('should not expand menu item when window.innerWidth is less than 991', () => {
//       window.resizeTo(50, 50);
//       component.menuItems = menuItems;
//       fixture.detectChanges();
//       component.menuItemMouseEnter(menuItems[1]);
//       expect(menuItems[1].expanded).toBeFalsy();
//     });
//   });
//
//   describe('#menuItemMouseLeave tests', () => {
//     it('should reset menu item state', () => {
//       menuItems[0].items[0].expanded = true;
//       menuItems[0].items[0].active = true;
//       component.menuItems = menuItems;
//       fixture.detectChanges();
//       component.menuItemMouseLeave();
//       expect(menuItems[0].items[0].expanded).toBeFalsy();
//       expect(menuItems[0].items[0].active).toBeFalsy();
//     });
//   });
//
// });
