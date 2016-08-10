import { Component, OnInit } from '@angular/core';
import { LogService } from "../services/log.service";

@Component({
    selector: 'about',
    template: '<p highlight>{{"about" | uppercase}}</p>'
})
export class AboutComponent implements OnInit {
    constructor(log: LogService) {
    }

    ngOnInit() {
    }

}