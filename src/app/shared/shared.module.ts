import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { LogService } from './services/log.service';

@NgModule({
    imports: [CommonModule],
    declarations: [
        HighlightDirective,
        UppercasePipe
    ],
    exports: [
        HighlightDirective,
        UppercasePipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LogService]
        }
    }
}