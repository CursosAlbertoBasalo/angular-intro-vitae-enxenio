import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackDirective } from './track.directive';
import { MinDirective } from './min.directive';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [TrackDirective, MinDirective, TruncatePipe],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, TrackDirective, MinDirective, TruncatePipe],
})
export class SharedModule {}
