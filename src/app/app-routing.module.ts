import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {VerificationDetailsComponent} from './verification-details/verification-details.component';
import {CareerDetailsComponent} from './career-details/career-details.component';
import {AdditionalDetailsComponent} from './additional-details/additional-details.component';
import {ChatComponent} from './chat/chat.component';
import {InvitedJobsComponent} from './invited-jobs/invited-jobs.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: 'Basic-Details', component:BasicDetailsComponent},
  {path: 'Verification-Details', component:VerificationDetailsComponent},
  {path: 'Career-Details', component:CareerDetailsComponent},
  {path: 'Additional-Details', component:AdditionalDetailsComponent},
  {path: 'Chat', component:ChatComponent},
  {path: 'Invited-Jobs', component:InvitedJobsComponent},
  {path: 'Settings', component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BasicDetailsComponent,VerificationDetailsComponent,CareerDetailsComponent,AdditionalDetailsComponent,ChatComponent,InvitedJobsComponent,SettingsComponent]
