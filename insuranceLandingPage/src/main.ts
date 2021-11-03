import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderInsuranceComponent } from './app/insurance-component/header-insurance/header-insurance.component';
import { HumanizingInsuranceComponent } from './app/insurance-component/humanizing-insurance/humanizing-insurance.component';
import { InsuranceComponentComponent } from './app/insurance-component/insurance-component.component';
import {DemoMaterialModule} from './app/material-module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
   
  entryComponents: [InsuranceComponentComponent],
  declarations: [InsuranceComponentComponent, HeaderInsuranceComponent, HumanizingInsuranceComponent],
  bootstrap: [InsuranceComponentComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 