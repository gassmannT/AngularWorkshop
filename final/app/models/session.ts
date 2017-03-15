import { Identifiable } from './identifiable';
import { Serializable } from './serializable';

export class Session implements Serializable, Identifiable {

    constructor(
        public id: number,
        public title: string,
        public room: string,
        public rating?: number
    ) { }

    public serialize(): Object {
        return {
            id: this.id,
            title: this.title,
            room: this.room,
            rating: this.rating
        };
    }

    public static deserialize(obj: any): Session {
        return new Session(obj.id,
            obj.title,
            obj.room,
            obj.rating);
    }
}