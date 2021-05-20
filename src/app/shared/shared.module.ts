import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module'

@NgModule({
    imports: [
        MaterialModule,
        PipesModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        MaterialModule,
        PipesModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
})
export class SharedModule { }
