import { Injectable } from "@angular/core";
import { Content } from "./content.model";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import * as _ from "lodash";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/first";

@Injectable()
export class ContentService {
    private cache : Content[];

    constructor(private http: HttpClient) {
    }

    private getData(): Observable<Content[]> {
        if (this.cache) {
            return Observable.of(this.cache).first();
        }

        return this.http.get<Content[]>(environment.contentLocation).do((content : Content[]) => {
            this.cache = content;
        });
    }

    getAllContent(): Observable<Content[]> {
        return this.getData();
    }

    getContentById(id: string): Observable<Content> {
        return this.getData().map((content : Content[]) => {
            return _.find(content, {id: id});
        });
        //var content = _.find(this.mockContent, {id: id});
        //return Observable.of(content);
        //return Observable.of(null);
    }
}