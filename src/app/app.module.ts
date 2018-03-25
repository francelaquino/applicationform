import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Http,HttpModule } from '@angular/http';
import { AppRouting } from './shared/approutes';
import { CommonService } from './services/common.service';
import { DataService } from './services/data.service';
import { HttpService } from './services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule,CalendarModule} from 'primeng/primeng';
import { SignaturePadModule } from 'angular2-signaturepad';


import { AppComponent } from './app.component';
import { ApplicationformComponent } from './forms/applicationform/applicationform.component';
import { ConsentComponent } from './forms/consent/consent.component';
import { RequestComponent } from './applications/request/request.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignatureFieldComponent } from './shared/signature-field/signature-field.component';
import { SignatureComakerComponent } from './shared/signature-comaker/signature-comaker.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationformComponent,
    ConsentComponent,
    RequestComponent,
    NotfoundComponent,
    SignatureFieldComponent,
    SignatureComakerComponent,
    HomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    SignaturePadModule ,BrowserAnimationsModule,BrowserModule,AppRouting,HttpModule,ReactiveFormsModule,FormsModule,CheckboxModule,CalendarModule
  ],
  providers: [CommonService,HttpService,SignaturePadModule,DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
