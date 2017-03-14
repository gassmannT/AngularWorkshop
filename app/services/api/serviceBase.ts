import { UrlService } from './url.service';
import { Identifiable } from '../../models/identifiable';
import { Serializable } from '../../models/serializable';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export abstract class ServiceBase<TModel extends Serializable & Identifiable> {
    constructor(
        protected endpointName: string,
        protected http: Http,
        protected url: UrlService
    ) { }

    public get(): Observable<Array<TModel>> {
        return this.http.get(this.url.getEndpoint(this.endpointName))
            .flatMap(response => Observable.from(response.json().data || []))
            .map(json => this.deserialize(json))
            .toArray();
    }

    public getById(id: number): Observable<TModel> {
        return this.http.get(this.url.getEndpoint(`${this.endpointName}/${id}`))
            .map(response => response.json().data || {})
            .map(json => this.deserialize(json));
    }

    public create(model: TModel): Observable<any> {
        return this.http.post(this.url.getEndpoint(this.endpointName), model.serialize());
    }

    public update(model: TModel): Observable<any> {
        return this.http.put(this.url.getEndpoint(`${this.endpointName}/${model.id}`), model.serialize());
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(this.url.getEndpoint(`${this.endpointName}/${id}`));
    }

    public abstract deserialize(obj: any): TModel;
}
