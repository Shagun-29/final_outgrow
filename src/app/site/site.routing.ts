import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './landing-pages/quiz/quiz.component';
import { SurveyComponent } from './landing-pages/survey/survey.component';
import { CalculatorComponent } from './landing-pages/calculator/calculator.component';
import { IncreaseSalesComponent } from './landing-pages/increase-sales/increase-sales.component';
import { IncreaseRoiComponent } from './landing-pages/increase-roi/increase-roi.component';
import { IncreaseConversionsComponent } from './landing-pages/increase-conversions/increase-conversions.component';
import { IdeaGeneratorComponent } from './landing-pages/idea-generator/idea-generator.component';
export const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    { path: 'increase-sales', component: IncreaseSalesComponent },
    { path: 'increase-roi', component: IncreaseRoiComponent },
    { path: 'increase-conversions', component: IncreaseConversionsComponent },
    { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' },
    { path: 'quiz', component: QuizComponent },
    { path: 'survey', component: SurveyComponent },
    { path: 'idea-generator', component: IdeaGeneratorComponent },
    { path: 'why-interactive', loadChildren: './why-interactive/why-interactive.module#WhyInteractiveModule' },

];

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);
