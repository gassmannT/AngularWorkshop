import { InMemoryDbService } from "angular-in-memory-web-api";
import { Session } from "../sessions/shared/session.model";

export class DataService implements InMemoryDbService {
    createDb() {
        let sessions: Session[] = [
            new Session(1, "The ultimate Angular workshop", "Regensdorf", 4),
            new Session(2, "Testing mit Angular", "Frankfurt", 4),
            new Session(3, "Deployment von Angular Applikationen", "Nürnberg", 4)
        ];
        return { sessions };
    }
}