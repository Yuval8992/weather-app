import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { WeatherItemComponent } from './weather-item.component';

@NgModule({
  declarations: [WeatherItemComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [WeatherItemComponent]
})
export class WeatherItemModule { }
