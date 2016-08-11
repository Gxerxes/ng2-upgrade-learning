import { Component, OnInit } from '@angular/core';
import { LogService } from './shared/services/log.service';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent implements OnInit {
    constructor(log: LogService) {
        console.log('app', log);
    }

    ngOnInit() {
    }
}