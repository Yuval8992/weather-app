import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherListComponent } from './weather-list.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherItemModule } from './weather-item/weather-item.module'

@NgModule({
  declarations: [WeatherListComponent],
  imports: [
    CommonModule,
    SharedModule,
    WeatherItemModule
  ],
  exports: [WeatherListComponent]
})
export class WeatherListModule { }
