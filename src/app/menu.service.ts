import { MenuType } from './menu-types';
import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
  }

  selectedMenu: MenuType = MenuType.BIO;

  list: Menu[] = [
    {
      id: MenuType.BIO,
      label: 'Bio',
      title: 'Bio',
      content: 'lorem ipsum',
      position: 'header'
    },
    {
      id: MenuType.REAL,
      label: 'Réalisations',
      title: 'Réalisations',
      content: 'lorem ipsum',
      position: 'header'
    },
    {
      id: MenuType.CONTACT,
      label: 'Contact',
      title: 'Contact',
      content: 'lorem ipsum',
      position: 'header'
    },
    {
      id: MenuType.MENTIONS,
      label: 'Mentions',
      title: 'Mentions',
      content: 'lorem ipsum',
      position: 'footer'
    },
    {
      id: MenuType.CONTRIB,
      label: 'Contributeurs',
      title: 'Contributeurs',
      content: 'lorem ipsum',
      position: 'footer'
    },

  ];

  getList(position): Menu[] {
    return this.list.filter( item => item.position === position );
  }
}
