import { MenuItemInterface } from '../interfaces';

export const menuItems: MenuItemInterface[] = [
  {
    name: 'Animation 1',
    icon: 'cube-outline',
    component: 'ANIMATION1_SCREEN',
  },
  {
    name: 'Animation 2',
    icon: 'albums-outline',
    component: 'ANIMATION2_SCREEN',
  },
  {
    name: 'Switches',
    icon: 'toggle-sharp',
    component: 'SWITCH_SCREEN',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'ALERT_SCREEN',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TEXTINPUT_SCREEN',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PULL_TO_REFRESH_SCREEN',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SECTION_LIST_SCREEN',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'MODAL_SCREEN',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'INFINITESCROLL_SCREEN',
  },
];
