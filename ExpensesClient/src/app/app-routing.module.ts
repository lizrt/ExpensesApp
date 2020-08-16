import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import {NewentryComponent} from './newentry/newentry.component';
import {DeleteentryComponent} from './deleteentry/deleteentry.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes=[
  {path:'',component:EntriesComponent,pathMatch:'full'},
  {path:'entries' ,component:EntriesComponent},
   {path:'newentry' ,component:NewentryComponent},
   {path:'register' ,component:RegisterComponent},
   {path:'login' ,component:LoginComponent},
   {path:'deleteentry/:id' ,component:DeleteentryComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
