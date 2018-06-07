import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

  selectMenu(name) {
    // console.log(name);
    this.menuService.selectedMenu = name;
  }

}
