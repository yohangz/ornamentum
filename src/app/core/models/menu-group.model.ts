import { MenuItem } from './menu-item.model';

export interface MenuGroup {
  name: string;
  menuItems?: MenuItem[];
}
