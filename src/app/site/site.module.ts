import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoUrlService} from '../shared/services/video-url.service'
import { RouterModule } from '@angular/router';
import { routes } from './site.routing';
import { CalculatorComponent } from './landing-pages/calculator/calculator.component';
import { SurveyComponent } from './landing-pages/survey/survey.component';
import { QuizComponent } from './landing-pages/quiz/quiz.component';
import { IncreaseSalesComponent } from './landing-pages/increase-sales/increase-sales.component';
import { IncreaseRoiComponent } from './landing-pages/increase-roi/increase-roi.component';
import { IncreaseConversionsComponent } from './landing-pages/increase-conversions/increase-conversions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    VideoUrlService
  ],
  declarations: [CalculatorComponent, SurveyComponent, QuizComponent, IncreaseSalesComponent, IncreaseRoiComponent, IncreaseConversionsComponent]
})
export class SiteModule { }
