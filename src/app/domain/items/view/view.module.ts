import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ViewService } from './view.service';

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, ViewRoutingModule, SharedModule],
  providers: [ViewService],
})
export class ViewModule {}
