import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './landing-pages/quiz/quiz.component';
import { SurveyComponent } from './landing-pages/survey/survey.component';
import { CalculatorComponent } from './landing-pages/calculator/calculator.component';
import { IncreaseSalesComponent } from './landing-pages/increase-sales/increase-sales.component';
import { IncreaseRoiComponent } from './landing-pages/increase-roi/increase-roi.component';
import {InteractiveCalculatorsAndQuizzesComponent} from './landing-pages/interactive-calculators-and-quizzes/interactive-calculators-and-quizzes.component';
import { IncreaseConversionsComponent } from './landing-pages/increase-conversions/increase-conversions.component';
import { IdeaGeneratorComponent } from './landing-pages/idea-generator/idea-generator.component';
import { Ltd1Component } from './landing-pages/ltd-1/ltd-1.component';
import { LtdComponent } from './landing-pages/ltd/ltd.component';
import { NotFoundComponent } from './landing-pages/not-found/not-found.component';
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
    { path: '**',component: NotFoundComponent}

];

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);
