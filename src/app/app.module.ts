import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';
import { ProdModule } from './prod/prod.module';
import { SharedModule } from './shared/shared.module';

import { appRouting } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AboutModule,
        ProdModule,
        appRouting,
        SharedModule.forRoot()
    ],
    declarations: [
        [
            AppComponent,
            HomeComponent
        ]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}