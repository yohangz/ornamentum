import { MenuSubGroup } from './menu-sub-group.model';

export interface MenuGroup {
  name: string;
  menuSubGroup: MenuSubGroup[];
  expanded: boolean;
}
