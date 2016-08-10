import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { LogService } from './services/log.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AboutComponent, HighlightDirective, UppercasePipe],
    providers: [LogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}