import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent } from './app.component';
import {SearchService} from './search.service';
import {MaterialModule, MdInputModule, MdCardModule, MdButtonModule, MdChipsModule, MdGridListModule, MdListModule, MdTooltipModule} from '@angular/material';


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
    MdGridListModule,
    MdChipsModule,
    MdTooltipModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
