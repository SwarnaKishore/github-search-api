import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import 'hammerjs';
import {MdListModule} from '@angular/material';
import { AppComponent } from './app.component';
import {SearchService} from './search.service';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';

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
    MdInputModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
