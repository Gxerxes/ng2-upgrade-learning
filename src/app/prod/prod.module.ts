import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProdComponent } from './prod.component';
import { routing } from './prod.routing';

@NgModule({
    imports: [
        routing,
        SharedModule
    ],
    declarations: [ProdComponent],
    providers: []
})
export class ProdModule {
}