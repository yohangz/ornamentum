import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-data-table-overview-component',
  templateUrl: './data-table-overview.component.html',
  styleUrls: ['./data-table-overview.component.scss']
})
export class DataTableOverviewComponent {
  public items: Observable<any>;

  constructor() {
    this.items = Observable.of([
      {
        'id': 72,
        'stationName': 'W 52 St & 11 Ave',
        'availableDocks': 27,
        'totalDocks': 39,
        'latitude': 1,
        'longitude': -73.99392888,
        'statusValue': 'In Service',
        'statusKey': 1,
        'availableBikes': 10,
        'stAddress1': 'W 52 St & 11 Ave',
        'stAddress2': '',
        'city': '',
        'postalCode': '',
        'location': '',
        'altitude': '',
        'testStation': false,
        'lastCommunicationTime': '2018-01-03 10:40:29 AM',
        'landMark': '',
        nest: {
          level: {
            x: 5
          }
        },
        test: [
          {
            'latitude': 2,
            'longitude': -73.99392888,
          },
          {
            'latitude': 1,
            'longitude': -73.99392888,
          }
        ]
      },
      {
        'id': 79,
        'stationName': 'Franklin St & W Broadway',
        'availableDocks': 21,
        'totalDocks': 33,
        'latitude': 1,
        'longitude': -74.00666661,
        'statusValue': 'In Service',
        'statusKey': 1,
        'availableBikes': 12,
        'stAddress1': 'Franklin St & W Broadway',
        'stAddress2': '',
        'city': '',
        'postalCode': '',
        'location': '',
        'altitude': '',
        'testStation': false,
        'lastCommunicationTime': '2018-01-03 10:42:59 AM',
        'landMark': '',
        nest: {
          level: {
            x: 20
          }
        },
        test: [
          {
            'latitude': 5,
            'longitude': -73.99392888,
          },
          {
            'latitude': 7,
            'longitude': -73.99392888,
          }
        ]
      },
      {
        'id': 82,
        'stationName': 'St James Pl & Pearl St',
        'availableDocks': 12,
        'totalDocks': 27,
        'latitude': 40.71117416,
        'longitude': -74.00016545,
        'statusValue': 'In Service',
        'statusKey': 1,
        'availableBikes': 15,
        'stAddress1': 'St James Pl & Pearl St',
        'stAddress2': '',
        'city': '',
        'postalCode': '',
        'location': '',
        'altitude': '',
        'testStation': false,
        'lastCommunicationTime': '2018-01-03 10:40:21 AM',
        'landMark': '',
        nest: {
          level: {
            x: 0
          }
        },
        test: [
          {
            'latitude': 8,
            'longitude': -73.99392888,
          },
          {
            'latitude': 11,
            'longitude': -73.99392888,
          }
        ]
      },
      {
        'id': 83,
        'stationName': 'Atlantic Ave & Fort Greene Pl',
        'availableDocks': 24,
        'totalDocks': 62,
        'latitude': 40.68382604,
        'longitude': -73.97632328,
        'statusValue': 'In Service',
        'statusKey': 1,
        'availableBikes': 37,
        'stAddress1': 'Atlantic Ave & Fort Greene Pl',
        'stAddress2': '',
        'city': '',
        'postalCode': '',
        'location': '',
        'altitude': '',
        'testStation': false,
        'lastCommunicationTime': '2018-01-03 10:42:38 AM',
        'landMark': '',
        nest: {
          level: {
            x: 343434
          }
        },
        test: [
          {
            'latitude': 111,
            'longitude': -73.99392888,
          },
          {
            'latitude': 45,
            'longitude': -73.99392888,
          }
        ]
      },
      {
        'id': 116,
        'stationName': 'W 17 St & 8 Ave',
        'availableDocks': 1,
        'totalDocks': 7,
        'latitude': 1,
        'longitude': -74.00149746,
        'statusValue': 'Not In Service',
        'statusKey': 3,
        'availableBikes': 0,
        'stAddress1': 'W 17 St & 8 Ave',
        'stAddress2': '',
        'city': '',
        'postalCode': '',
        'location': '',
        'altitude': '',
        'testStation': false,
        'lastCommunicationTime': '2017-11-14 08:58:16 AM',
        'landMark': '',
        nest: {
          level: {
            x: -5
          }
        },
        test: [
          {
            'latitude': 67657,
            'longitude': -73.99392888,
          },
          {
            'latitude': 238,
            'longitude': -73.99392888,
          }
        ]
      }
    ]);
  }
}
