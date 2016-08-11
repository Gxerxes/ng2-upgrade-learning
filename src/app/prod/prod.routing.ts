import { RouterModule } from '@angular/router';

import { ProdComponent } from './prod.component';


export const routing = RouterModule.forChild([
    {path: 'prod', component: ProdComponent},
]);