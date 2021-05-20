import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSummarizeComponent } from './weather-summarize.component'
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WeatherSummarizeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [WeatherSummarizeComponent]
})
export class WeatherSummarizeModule { }
