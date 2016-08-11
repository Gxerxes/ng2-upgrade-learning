import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';

import { HighlightDirective } from './directives/highlight.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { LogService } from './services/log.service';

import { appRouting } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AboutModule,
        appRouting
    ],
    declarations: [
        [
            AppComponent,
            HomeComponent
        ],
        HighlightDirective,
        UppercasePipe
    ],
    providers: [LogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}