import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleCardComponent } from './projects/single-card/single-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FourCardComponent } from './projects/four-card/four-card.component';
import { FyloDarkComponent } from './projects/fylo-dark/fylo-dark.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleCardComponent,
    FourCardComponent,
    FyloDarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
