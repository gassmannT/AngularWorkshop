import { Injectable } from "@angular/core";

@Injectable()
export class UrlService {
    private apiUrl: string;
    constructor() {
        this.apiUrl = "/api/";
    }

    public getEndpoint(action: string): string {
        if (!action) {
            throw new Error('Parameter action is invalid.');
        }

        return this.apiUrl + (action[0] === '/' && action.substr(1) || '') + action;
    }
}
