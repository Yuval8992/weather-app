import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './weather-container.component';
import { WeatherListModule } from './weather-list/weather-list.module'
import { WeatherSummarizeModule } from './weather-summarize/weather-summarize.module'

@NgModule({
  declarations: [WeatherContainerComponent],
  imports: [
    CommonModule,
    WeatherListModule,
    WeatherSummarizeModule
  ],
  exports: [WeatherContainerComponent]
})
export class WeatherContainerModule { }
