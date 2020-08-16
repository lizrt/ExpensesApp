import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {EntryService} from './entry.service';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NewentryComponent } from './newentry/newentry.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { UpdatentryComponent } from './updatentry/updatentry.component';
import { DeleteentryComponent } from './deleteentry/deleteentry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    HeaderComponent,
    FooterComponent,
    NewentryComponent,
    UpdatentryComponent,
    DeleteentryComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatTableModule, MatInputModule, MatSelectModule, MatCardModule,MatToolbarModule,MatListModule,MatDialogModule
  ],
  entryComponents:[UpdatentryComponent],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
