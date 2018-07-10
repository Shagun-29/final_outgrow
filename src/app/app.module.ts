import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
// import { Script } from './shared/service/script.service'; 
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';
import { TermsComponent } from './shared/components/terms/terms.component';
import { FooterComponent } from './shared/components/footer/footer.component';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
import { LoadingService } from './shared/service/loading.service';
// import { GoogleSheet } from './shared/interfaces/GoogleSheet';
// import { IdeaGenService } from './shared/services/idea-gen.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrivacyComponent,
    TermsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  ],
  providers: [
    // Script
    CookieService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
