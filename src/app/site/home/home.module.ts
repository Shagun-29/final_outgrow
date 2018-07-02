import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexHomeComponent } from './index-home/index-home.component';

import { RouterModule } from '@angular/router';
import { routes } from './home.routing';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[Title],
  declarations: [IndexHomeComponent]
})
export class HomeModule { }
