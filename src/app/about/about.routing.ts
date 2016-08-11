import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
    {path: 'about', component: AboutComponent},
];

export const aboutRouting = RouterModule.forChild(aboutRoutes);