import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoUrlService} from '../shared/service/video-url.service'
import { RouterModule } from '@angular/router';
import { routes } from './site.routing';
import { CalculatorComponent } from './landing-pages/calculator/calculator.component';
import { IncreaseConversionsComponent } from './landing-pages/increase-conversions/increase-conversions.component';
import { IncreaseRoiComponent } from './landing-pages/increase-roi/increase-roi.component';
import { IncreaseSalesComponent } from './landing-pages/increase-sales/increase-sales.component';
import { QuizComponent } from './landing-pages/quiz/quiz.component';
import { SurveyComponent } from './landing-pages/survey/survey.component';
import { CalcService } from '../shared/service/calc.service';
import { IdeaGeneratorComponent } from './landing-pages/idea-generator/idea-generator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    VideoUrlService,
    CalcService
  ],
  declarations: [CalculatorComponent,IncreaseConversionsComponent,IncreaseRoiComponent,IncreaseSalesComponent,QuizComponent,SurveyComponent,IdeaGeneratorComponent]
})
export class SiteModule { }
