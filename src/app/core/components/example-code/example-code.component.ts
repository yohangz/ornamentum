import { Component, Input } from '@angular/core';

/**
 * Component class to represent application footer.
 * @class ExampleCodeComponent
 */
@Component({
  selector: 'app-example-code',
  styleUrls: ['./example-code.component.scss'],
  templateUrl: './example-code.component.html'
})
export class ExampleCodeComponent {
  @Input()
  public css: string;

  @Input()
  public javascript: string;

  @Input()
  public html: string;

  @Input()
  public json: string;
}
