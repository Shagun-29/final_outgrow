import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' },
    { path: 'why-interactive', loadChildren: './why-interactive/why-interactive.module#WhyInteractiveModule' },
    // {path: 'calculator', component: './landing-pages/calculator/calculator.component'}
];

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);
