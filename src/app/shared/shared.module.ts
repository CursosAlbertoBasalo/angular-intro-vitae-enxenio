import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackDirective } from './track.directive';
import { MinDirective } from './min.directive';

@NgModule({
  declarations: [TrackDirective, MinDirective],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, TrackDirective, MinDirective],
})
export class SharedModule {}
