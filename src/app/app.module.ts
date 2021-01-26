import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent } from './app.component';
import {SearchService} from './search.service';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
