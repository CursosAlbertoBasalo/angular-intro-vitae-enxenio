import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivateRoutingModule } from './activate-routing.module';
import { ActivateComponent } from './activate.component';

@NgModule({
  declarations: [ActivateComponent],
  imports: [CommonModule, FormsModule, ActivateRoutingModule],
})
export class ActivateModule {}
