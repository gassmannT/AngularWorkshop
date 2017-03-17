import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Session } from "./shared/session.model";
import { SessionService } from "./shared/session.service";

@Component({
    moduleId: module.id,
    selector: 'sessions',
    templateUrl: 'sessions.component.html'
})
export class SessionsComponent implements OnInit {
    pageTitle: string;
    list: Session[] = [];

    constructor(
        private sessionService: SessionService,
        private router: Router
    ) { }

    ngOnInit() {
        this.pageTitle = "Sessions";

        this.sessionService.get().subscribe(list => {
            this.list = list;
        })
    }

    onEdit(item: Session) {
        let link = ['/edit', item.id];
        this.router.navigate(link);
    }
}