import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AuthorComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
