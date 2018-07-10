import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexHomeComponent } from './index-home/index-home.component';

import { RouterModule } from '@angular/router';
import { routes } from './home.routing';
import { Title } from '@angular/platform-browser';
import { LoadingService } from '../../shared/service/loading.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[Title,LoadingService],
  declarations: [IndexHomeComponent]
})
export class HomeModule { }
