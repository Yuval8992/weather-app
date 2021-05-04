import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    //   { path: '', redirectTo: '/flight-search', pathMatch: 'full' },
    //   {
    //     path: 'flight-search',
    //     component: FlightSearchContainerComponent,
    //   },
    //   {
    //     path: 'about',
    //     loadChildren: () => import('@modules/about/about.module').then(m => m.AboutModule)
    //   },
    //   { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }