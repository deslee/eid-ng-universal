import { Injectable } from "@angular/core";
import { Content } from "./content.model";
import { Observable, Subject } from "rxjs";
import { environment } from '../../../environments/environment';
import { ContentLoaderService } from "./content-loader.service";
import * as _ from "lodash";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/first";

@Injectable()
export class ContentService {
    private cache : Content[];

    constructor(private contentLoader: ContentLoaderService) {
    }

    private getData(): Observable<Content[]> {
        if (this.cache) {
            return Observable.of(this.cache).first();
        }
        return this.contentLoader.getAllContent().do((content: Content[]) => {
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
    }
}