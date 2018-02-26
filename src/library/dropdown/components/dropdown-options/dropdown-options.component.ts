import { Component, EventEmitter, Output } from '@angular/core';

import { DropdownItem } from '../../models/dropdown-item.model';

import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';

@Component({
  selector: 'ng-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss']
})
export class DropdownOptionsComponent {
  @Output()
  public toggleOptionSelectedState = new EventEmitter<DropdownItem>();

  constructor(private eventStateService: DropdownEventStateService,
              public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService) {
  }

  /**
   * Performs data loading when scrolling by checking the scroll position.
   * This will trigger only when loadOnScroll is true.
   * @param event
   */
  public checkScrollPosition(event: any) {

    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const scrollElementHeight = event.target.clientHeight;

    const roundingPixel = 1;
    const gutterPixel = 1;

    if (scrollTop >= scrollHeight - (1 + this.config.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel
      && this.dataStateService.currentItemCount < this.dataStateService.totalOptionCount) {
      this.dataStateService.offset = this.dataStateService.offset + this.config.limit;
      this.eventStateService.dataFetchStream.emit(false);
    }
  }
}
