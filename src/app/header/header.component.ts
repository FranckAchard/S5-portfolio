import { MenuType } from './../menu-types';
import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

  selectMenu(name) {
    // console.log(name);
    this.menuService.selectedMenu = name;
  }

}
