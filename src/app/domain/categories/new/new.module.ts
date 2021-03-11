import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

@NgModule({
  declarations: [NewComponent],
  imports: [CommonModule, FormsModule, NewRoutingModule],
})
export class NewModule {}
