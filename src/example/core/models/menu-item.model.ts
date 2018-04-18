export interface MenuItem {
  title: string;
  iconClasses?: string [];
  routePath: string;
  active?: boolean;
  expanded?: boolean;
  visible?: boolean;
  items?: MenuItem[];
}
