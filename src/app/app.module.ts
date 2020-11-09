import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import '@grapecity/wijmo.cultures/wijmo.culture.ja';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
