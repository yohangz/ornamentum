import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

const appName = 'Test App Name';
const appVersion = '0.1v';
const currentYear = 2018;

describe('Footer component tests', () => {

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.all());
    htmlElement = debugElement.nativeElement.children[0];

    component.appName = appName;
    component.appVersion = appVersion;
    component.currentYear = currentYear;
  }));

  it('should display original app name', () => {
    fixture.detectChanges();
    expect(htmlElement.textContent).toContain(component.appName);
  });

  it('should display original app version', () => {
    fixture.detectChanges();
    expect(htmlElement.textContent).toContain(component.appVersion);
  });

  it('should display original current year', () => {
    fixture.detectChanges();
    expect(htmlElement.textContent).toContain(component.currentYear.toString());
  });

  it('should display a different text', () => {
    const mockAppName = 'App Version : 00.1V : &copy; 2019 Test App Name All rights reserved.';
    component.appName = mockAppName;
    fixture.detectChanges();
    expect(htmlElement.textContent).toContain(mockAppName);
  });
});
