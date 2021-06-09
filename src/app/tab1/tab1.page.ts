import { Component } from '@angular/core';
import { tweets } from '../../assets/fake-data/tweets.json';
import { Fleets } from '../../assets/fake-data/Fleets.json';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tweets = tweets;
  fleets = Fleets;
  ops = {
    slidesPerView: 5.4,
    spaceBetween: 10,
    slidesOffsetBefore: 0,
  };
  segment = 'home';
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.open('main');
  }
}
