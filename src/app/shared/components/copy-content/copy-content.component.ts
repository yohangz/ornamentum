import { Component, Input } from '@angular/core';

/**
 * Component class to represent application footer.
 * @class ExampleCodeComponent
 */
@Component({
  selector: 'app-copy-content',
  styleUrls: ['./copy-content.component.scss'],
  templateUrl: './copy-content.component.html'
})
export class CopyContentComponent {
  @Input()
  public data: string;
}
