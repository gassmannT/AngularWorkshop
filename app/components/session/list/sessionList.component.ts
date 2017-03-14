import { SessionService } from '../../../services/api/session.service';
import { Session } from '../../../models/session';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit {
    pageTitle: string;
    list: Session[] = [];

    constructor(private sessionService: SessionService) { }

    ngOnInit() {
        this.pageTitle = "Sessions";

        this.sessionService.get().subscribe(list => {
            this.list = list;
        })
    }
}