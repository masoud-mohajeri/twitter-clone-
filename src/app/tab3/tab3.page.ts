import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { tweets } from '../../assets/fake-data/tweets.json';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  tweets = tweets;
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.open('main');
  }
  ngOnInit() {}

  segmentChanged(event) {}
}
