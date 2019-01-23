import { Component } from '@angular/core';

// Basic usage example component controller
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any[] = [
    {
      orderMethodType: 'Fax',
      grossMargin: 0.34754797,
      id: 10
    },
    {
      orderMethodType: 'Fax',
      grossMargin: 0.39814629,
      id: 15
    },
    {
      orderMethodType: 'Telephone',
      grossMargin: 0.36186587,
      id: 20
    },
    {
      orderMethodType: 'Fax',
      grossMargin: 0.24468085,
      id: 25
    },
    {
      orderMethodType: 'Web',
      grossMargin: 0.47613982,
      id: 30
    },
  ];
}
