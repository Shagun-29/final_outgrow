
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';
import { TermsComponent } from './shared/components/terms/terms.component';

export const routes: Routes = [
  
  
  { path: '', loadChildren: './site/site.module#SiteModule' },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'tos', component: TermsComponent } 
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);