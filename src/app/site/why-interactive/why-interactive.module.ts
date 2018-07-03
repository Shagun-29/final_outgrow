import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyInteractiveHomeComponent } from './why-interactive-home/why-interactive-home.component';

import { RouterModule } from '@angular/router';
import { routes } from './why-interactive.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WhyInteractiveHomeComponent]
})
export class WhyInteractiveModule { }
