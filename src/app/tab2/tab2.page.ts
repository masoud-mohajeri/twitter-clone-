import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { tweets } from '../../assets/fake-data/tweets.json';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  tweets = tweets;
  ops = {
    // spaceBetween: 50,
    slidesPerView: 1.7,
    // freeMode: true,
    loop: true,
  };
  posts = 'For you';
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.open('main');
  }
  segmentChanged(event) {
    this.posts = event.detail.value;
  }
}
