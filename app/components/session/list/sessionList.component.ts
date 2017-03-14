import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { SessionService } from '../../../services/api/session.service';
import { Session } from '../../../models/session';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit {
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
        let link = ['/session/edit', item.id];
        this.router.navigate(link);
    }
}