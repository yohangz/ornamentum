export interface MenuItem {
  title: string;
  routePath: string;
  active?: boolean;
  items?: MenuItem[];
}
