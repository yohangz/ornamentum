import { Component } from '@angular/core';

/**
 * Component class for showing base view.
 * @class BaseComponent
 */
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private currentYear: Number;

  constructor() {
    this.currentYear = (new Date()).getFullYear();
  }
}

