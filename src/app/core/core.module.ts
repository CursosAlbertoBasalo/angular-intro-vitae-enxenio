import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './author.component';
import { FooterComponent } from './ui/footer.component';
import { HeaderComponent } from './ui/header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AuthorComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
