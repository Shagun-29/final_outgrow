import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './use-cases/quiz/quiz.component';
import { SurveyComponent } from './use-cases/survey/survey.component';
import { CalculatorComponent } from './use-cases/calculator/calculator.component';
import { IncreaseSalesComponent } from './use-cases/increase-sales/increase-sales.component';
import { IncreaseRoiComponent } from './use-cases/increase-roi/increase-roi.component';
import {InteractiveCalculatorsAndQuizzesComponent} from './use-cases/interactive-calculators-and-quizzes/interactive-calculators-and-quizzes.component';
import { IncreaseConversionsComponent } from './use-cases/increase-conversions/increase-conversions.component';
import { IdeaGeneratorComponent } from './use-cases/idea-generator/idea-generator.component';
import { Ltd1Component } from './use-cases/ltd-1/ltd-1.component';
import { LtdComponent } from './use-cases/ltd/ltd.component';
import { NotFoundComponent } from './use-cases/not-found/not-found.component';
import { EcommerceQuizesComponent } from './use-cases/ecommerce-quizes/ecommerce-quizes.component';
import { ChatbotComponent } from './use-cases/chatbot/chatbot.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

export const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    {path:'idea-generator' ,component:IdeaGeneratorComponent},
    { path: 'increase-sales', component: IncreaseSalesComponent },
    { path: 'increase-roi', component: IncreaseRoiComponent },
    {path: 'interactive-calculators-and-quizzes',component:InteractiveCalculatorsAndQuizzesComponent},
    { path: 'increase-conversions', component: IncreaseConversionsComponent },
    { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' },
    { path: 'quiz', component: QuizComponent },
    { path: 'survey', component: SurveyComponent },
    { path: 'why-interactive', loadChildren: './why-interactive/why-interactive.module#WhyInteractiveModule' },
    { path: 'ltd-1', component: Ltd1Component },
    { path: 'ltd', component: LtdComponent },
    { path: 'chatbot', component: ChatbotComponent },
    { path: 'ecommerce-quizes', component: EcommerceQuizesComponent },
    { path: 'case-studies', component: CaseStudiesComponent },
    { path: '**',component: NotFoundComponent}
      
];

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);
