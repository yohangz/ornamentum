import { Component } from '@angular/core';

/**
 * Basic usage example component controller.
 */
@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public data: any[] = [
    {
      productType: 'Cooking Gear',
      id: 10
    },
    {
      productType: 'Tents',
      id: 15
    },
    {
      productType: 'Sleeping Bags',
      id: 20
    },
    {
      productType: 'Lanterns',
      id: 25
    },
    {
      productType: 'Rope',
      id: 30
    },
    {
      productType: 'Tents',
      id: 35
    },
    {
      productType: 'Lanterns',
      id: 40
    },
    {
      productType: 'Climbing Accessories',
      id: 45
    },
    {
      productType: 'Tents',
      id: 50
    },
    {
      productType: 'Safety',
      id: 55
    }
  ];
}
