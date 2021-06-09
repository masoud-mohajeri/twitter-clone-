import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { tweets } from '../../assets/fake-data/tweets.json';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  tweets = tweets;
  ngOnInit() {}
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.open('main');
  }
}
