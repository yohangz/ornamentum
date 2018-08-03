import { Component, Input } from '@angular/core';

import { ExampleFile, FileType } from '../../models';

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
  public FileType = FileType;

  @Input()
  public files: ExampleFile[];
}
