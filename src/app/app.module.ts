import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {DropdownModule} from 'primeng/dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule}from '@angular/common/http';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponenetCComponent } from './componenet-c/componenet-c.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {TimelineModule} from 'primeng/timeline';
import { TimelineComponent } from './timeline/timeline.component';
import {DialogModule} from 'primeng/dialog';
import { DisplayValueComponent } from './display-value/display-value.component';
import { ChangeValueComponent } from './change-value/change-value.component';








@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponenetCComponent,
    TimelineComponent,
    DisplayValueComponent,
    ChangeValueComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CascadeSelectModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    TimelineModule,
    DialogModule
    

  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
