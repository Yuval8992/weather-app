import { NgModule } from '@angular/core';
import { FormatTempPipe } from './format-temp.pipe';

@NgModule({
  declarations: [
    FormatTempPipe,
  ],
  exports: [
    FormatTempPipe
  ],
})
export class PipesModule { }
