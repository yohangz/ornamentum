import { Navigation } from './navigation.model';

export interface MenuItem {
  title: string;
  routePath: string;
  navigation?: Navigation[];
}
