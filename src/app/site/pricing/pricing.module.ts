import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';

import { RouterModule } from '@angular/router';
import { routes } from './pricing.routing';
import { PricingFaqComponent } from './pricing-faq/pricing-faq.component';
import { PricingPlansComponent } from './pricing-plans/pricing-plans.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PricingHomeComponent, PricingFaqComponent, PricingPlansComponent]
})
export class PricingModule { }
