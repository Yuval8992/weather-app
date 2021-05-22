import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { WeatherContainerModule } from './modules/weather-container/weather-container.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    SharedModule,
    HttpClientModule,
    WeatherContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
