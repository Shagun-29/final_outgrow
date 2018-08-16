
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';
import { TermsComponent } from './shared/components/terms/terms.component';

export const routes: Routes = [
  
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'tos', component: TermsComponent } ,
  { path: '', loadChildren: './site/site.module#SiteModule' },
  
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);