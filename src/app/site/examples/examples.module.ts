import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesHomeComponent } from './examples-home/examples-home.component';

import {  RouterModule } from '@angular/router';
import { routes } from './examples.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  declarations: [ExamplesHomeComponent]
})
export class ExamplesModule { }
