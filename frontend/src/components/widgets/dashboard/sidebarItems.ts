import { IconType } from 'react-icons';
import { RiVipDiamondFill, RiBarChart2Fill, RiShoppingCartFill, RiGlobalFill, RiBrush3Fill, RiBook2Fill, RiCalendarFill, RiServiceFill, RiMenuLine } from 'react-icons/ri';

export interface MenuItem {
  title: string;
  icon?: IconType;
  subMenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    title: 'Components',
    icon: RiVipDiamondFill,
    subMenu: [
      { title: 'Grid' },
      { title: 'Layout' },
      {
        title: 'Forms',
        subMenu: [
          { title: 'Input' },
          { title: 'Select' },
          {
            title: 'More',
            subMenu: [
              { title: 'CheckBox' },
              { title: 'Radio' },
              {
                title: 'Want more ?',
                subMenu: [{ title: 'You made it' }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Charts',
    icon: RiBarChart2Fill,
    subMenu: [
      { title: 'Pie chart' },
      { title: 'Line chart' },
      { title: 'Bar chart' }
    ]
  },
  {
    title: 'E-commerce',
    icon: RiShoppingCartFill,
    subMenu: [
      { title: 'Products' },
      { title: 'Orders' },
      { title: 'Credit card' }
    ]
  },
  {
    title: 'Maps',
    icon: RiGlobalFill,
    subMenu: [
      { title: 'Google maps' },
      { title: 'Open street map' }
    ]
  },
  {
    title: 'Theme',
    icon: RiBrush3Fill,
    subMenu: [
      { title: 'Dark' },
      { title: 'Light' }
    ]
  },
  { title: 'Documentation', icon: RiBook2Fill },
  { title: 'Calendar', icon: RiCalendarFill },
  { title: 'Examples', icon: RiServiceFill }
];