import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public title: string;

    constructor() { }

    ngOnInit() {
        this.title = "Session rating app";
    }
}
