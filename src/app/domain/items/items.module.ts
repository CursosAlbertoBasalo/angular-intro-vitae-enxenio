import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';

@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule, SharedModule, ItemsRoutingModule],
})
export class ItemsModule {}
