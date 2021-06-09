import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TweetComponent],
  imports: [IonicModule, CommonModule, SharedDirectivesModule],
  exports: [TweetComponent],
})
export class SharedComponentsModule {}
