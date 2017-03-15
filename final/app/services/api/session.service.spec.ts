import { MockBackend, MockConnection } from '@angular/http/testing';
import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from "@angular/http";

import { SessionService } from './session.service';
import { UrlService } from './url.service';

describe("SessionService", () => {
    let sessionService: SessionService;
    let mockBackend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [SessionService, UrlService, MockBackend, { provide: XHRBackend, useClass: MockBackend }]
        });
    });

    beforeEach(() => {
        sessionService = TestBed.get(SessionService);
        mockBackend = TestBed.get(XHRBackend);
    });

    it("should get all sessions by observables", async(() => {
        mockBackend.connections.subscribe((c: MockConnection) => {
            expect(c.request.url).toContain("/api/sessions");

            c.mockRespond(new Response(new ResponseOptions({
                body: {
                    data: [
                        { title: "SessionTitle" }
                    ]
                }
            })));
        });

        sessionService.get().subscribe(sessions => {
            mockBackend.verifyNoPendingRequests();
            expect(sessions[0].title).toBe("SessionTitle");
        });
    }));

});