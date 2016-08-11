import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/about', pathMatch: 'full'}
];

export const appRouting = RouterModule.forRoot(appRoutes, {useHash: true});