import { Component, HostListener, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent implements OnInit {
  // gestione desktop/mobile
  layout: any;

  ngOnInit() {
    this.layout = Utils.isMobile(window);
  }
  @HostListener('window:resize', ['$event'])
  //onResize(event: any) {
    onResize() {
      this.layout = Utils.isMobile(window);
  }
}
