import { UrlService } from './url.service';
import { ServiceBase } from './serviceBase';
import { Session } from '../../models/session';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class SessionService extends ServiceBase<Session>{

    constructor(
        http: Http,
        url: UrlService
    ) { super("sessions", http, url); }

    public deserialize(obj: any): Session {
        return Session.deserialize(obj);
    }
}