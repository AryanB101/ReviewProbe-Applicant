import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

// import { CareerDetailsComponent } from './career-details/career-details.component';
// import { BasicDetailsComponent } from './basic-details/basic-details.component';
// import { VerificationDetailsComponent } from './verification-details/verification-details.component';
// import { ChatComponent } from './chat/chat.component';
// import { InvitedJobsComponent } from './invited-jobs/invited-jobs.component';
// import { SettingsComponent } from './settings/settings.component';
// import { AdditionalDetailsComponent } from './additional-details/additional-details.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
    // CareerDetailsComponent,
    // BasicDetailsComponent,
    // VerificationDetailsComponent,
    // ChatComponent,
    // InvitedJobsComponent,
    // SettingsComponent,
    // AdditionalDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
