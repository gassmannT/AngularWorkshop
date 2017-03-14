import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { SessionService } from '../../../services/api/session.service';
import { Session } from '../../../models/session';

@Component({
    moduleId: module.id,
    selector: 'session-edit',
    templateUrl: 'session-edit.component.html'
})
export class SessionEditComponent implements OnInit {
    session: Session;

    constructor(
        private sessionService: SessionService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params["id"];
            this.sessionService.getById(id).subscribe(p => this.session = p);
        });
    }

    onSave(valid: boolean) {
        if (valid) {
            this.sessionService.update(this.session).subscribe(() => {
                this.router.navigate(['/'])
            });
        }
    }

    onBack() {
        this.router.navigate(['/'])
    }
}