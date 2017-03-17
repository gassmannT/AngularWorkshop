import { Identifiable } from "../../core/identifiable";
import { Serializable } from "../../core/serializable";

export class Session implements Serializable, Identifiable {

    constructor(
        public id: number,
        public title: string,
        public city: string,
        public rating?: number
    ) { }

    public serialize(): Object {
        return {
            id: this.id,
            title: this.title,
            city: this.city,
            rating: this.rating
        };
    }

    public static deserialize(obj: any): Session {
        return new Session(obj.id,
            obj.title,
            obj.city,
            obj.rating);
    }
}