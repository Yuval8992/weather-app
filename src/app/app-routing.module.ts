import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherContainerComponent } from './modules/weather-container/weather-container.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component'

export const routes: Routes = [
    { path: '', redirectTo: '/weather-search', pathMatch: 'full' },
    { path: 'weather-search', component: WeatherContainerComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }