import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    template: '<p highlight>{{"about" | uppercase}}</p>'
})
export class AboutComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}