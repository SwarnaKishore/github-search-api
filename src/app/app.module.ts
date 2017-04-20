import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import {SearchService} from './search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdInputModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
