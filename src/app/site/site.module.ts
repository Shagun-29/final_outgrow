import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoUrlService} from '../shared/service/video-url.service'
// import { Script } from '../shared/service/script.service'
import { RouterModule } from '@angular/router';
import { routes } from './site.routing';
import { CalculatorComponent } from './use-cases/calculator/calculator.component';
import { IncreaseConversionsComponent } from './use-cases/increase-conversions/increase-conversions.component';
import { IncreaseRoiComponent } from './use-cases/increase-roi/increase-roi.component';
import {InteractiveCalculatorsAndQuizzesComponent} from './use-cases/interactive-calculators-and-quizzes/interactive-calculators-and-quizzes.component';
import { IncreaseSalesComponent } from './use-cases/increase-sales/increase-sales.component';
import { QuizComponent } from './use-cases/quiz/quiz.component';
import { SurveyComponent } from './use-cases/survey/survey.component';
import { CalcService } from '../shared/service/calc.service';
import { IdeaGeneratorComponent } from './use-cases/idea-generator/idea-generator.component';
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
import { Ltd1Component } from './use-cases/ltd-1/ltd-1.component';
import { LtdComponent } from './use-cases/ltd/ltd.component';
import { NotFoundComponent } from './use-cases/not-found/not-found.component';
import { EcommerceQuizesComponent } from './use-cases/ecommerce-quizes/ecommerce-quizes.component';
import { ChatbotComponent } from './use-cases/chatbot/chatbot.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

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
  declarations: [CalculatorComponent,IncreaseConversionsComponent,IncreaseRoiComponent,IncreaseSalesComponent,QuizComponent,SurveyComponent,IdeaGeneratorComponent,InteractiveCalculatorsAndQuizzesComponent, Ltd1Component, LtdComponent, NotFoundComponent, EcommerceQuizesComponent, ChatbotComponent, CaseStudiesComponent]
})
export class SiteModule { }
