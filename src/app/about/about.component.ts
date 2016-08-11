import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/services/log.service';

@Component({
    selector: 'about',
    template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
    constructor(log: LogService) {
        console.log('about', log);
    }

    ngOnInit() {
    }

}