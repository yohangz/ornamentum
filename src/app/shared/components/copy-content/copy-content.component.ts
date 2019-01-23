import { Component, Input } from '@angular/core';

/**
 * Copy code snippet controller.
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
