import { Component, OnInit } from '@angular/core';
import { LogService } from "./services/log.service";

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent implements OnInit {
    constructor(log:LogService) {

    }

    ngOnInit() {
    }
}