
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';
import { TermsComponent } from './shared/components/terms/terms.component';
import { IdeaGeneratorComponent } from './idea-generator/idea-generator.component';

export const routes: Routes = [
  
  
  { path: '', loadChildren: './site/site.module#SiteModule' },
  { path: 'idea-generator', component: IdeaGeneratorComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'tos', component: TermsComponent },  
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);