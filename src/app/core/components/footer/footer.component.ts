import { Component, Input } from '@angular/core';

/**
 * Component class to represent application footer.
 * @class FooterComponent
 */
@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public currentYear: number;

  /**
   * Input to represent application name.
   */
  @Input()
  public appName: string;

  /**
   * Input to represent application version.
   */
  @Input()
  public appVersion: string;

  /**
   * Create an AppFooterComponent.
   *
   * @constructor
   */
  constructor() {
    this.setCurrentYear();
  }

  /**
   * Method to set current year.
   */
  private setCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }
}
