import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesHomeComponent } from './features-home/features-home.component';

import { RouterModule } from '@angular/router';
import { routes } from './features.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeaturesHomeComponent]
})
export class FeaturesModule { }
