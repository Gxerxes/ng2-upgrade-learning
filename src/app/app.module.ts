import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AboutComponent, HighlightDirective],
    bootstrap: [AppComponent]
})
export class AppModule {
}