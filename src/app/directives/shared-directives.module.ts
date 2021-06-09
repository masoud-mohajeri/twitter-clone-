import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickySegmentDirective } from './sticky-segment.directive';
import { HideHeaderDirective } from './hide-header.directive';
import { SanitizeHtml } from './sanetize-html.pipe';

@NgModule({
  declarations: [HideHeaderDirective, StickySegmentDirective, SanitizeHtml],
  imports: [CommonModule],
  exports: [HideHeaderDirective, StickySegmentDirective, SanitizeHtml],
})
export class SharedDirectivesModule {}
