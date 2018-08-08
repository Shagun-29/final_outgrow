import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoUrlService} from '../shared/service/video-url.service'
// import { Script } from '../shared/service/script.service'
import { RouterModule } from '@angular/router';
import { routes } from './site.routing';
import { CalculatorComponent } from './landing-pages/calculator/calculator.component';
import { IncreaseConversionsComponent } from './landing-pages/increase-conversions/increase-conversions.component';
import { IncreaseRoiComponent } from './landing-pages/increase-roi/increase-roi.component';
import {InteractiveCalculatorsAndQuizzesComponent} from './landing-pages/interactive-calculators-and-quizzes/interactive-calculators-and-quizzes.component';
import { IncreaseSalesComponent } from './landing-pages/increase-sales/increase-sales.component';
import { QuizComponent } from './landing-pages/quiz/quiz.component';
import { SurveyComponent } from './landing-pages/survey/survey.component';
import { CalcService } from '../shared/service/calc.service';
import { IdeaGeneratorComponent } from './landing-pages/idea-generator/idea-generator.component';
import {SelectModule} from 'ng2-select';
// import { GoogleSheet } from '../shared/interfaces/GoogleSheet';
// import { IdeaGenService } from '../shared/services/idea-gen.service';
import { GetDataService } from '../shared/service/get-data.service';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ApiRequestService } from '../shared/services/api-request.service';
import { FormsModule } from '@angular/forms';
import { IdeaGenService } from '../shared/service/idea-gen.service';
import { PricingService } from '../shared/services/pricing.service';
import { Ltd1Component } from './landing-pages/ltd-1/ltd-1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    RouterModule.forChild(routes),
    HttpModule,
  ],
  providers:[
    // GoogleSheet,
    // IdeaGenService,
    VideoUrlService,
    CalcService,
    GetDataService,
    IdeaGenService,
    HttpClient,
    ApiRequestService,
    PricingService
    // Script
    
   ],
  declarations: [CalculatorComponent,IncreaseConversionsComponent,IncreaseRoiComponent,IncreaseSalesComponent,QuizComponent,SurveyComponent,IdeaGeneratorComponent,InteractiveCalculatorsAndQuizzesComponent, Ltd1Component]
})
export class SiteModule { }
