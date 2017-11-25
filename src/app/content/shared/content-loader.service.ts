import { Injectable } from "@angular/core";
import { Content } from "./content.model";
import { Observable } from "rxjs/Observable";
import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ContentLoaderService {
    constructor(public http: HttpClient) {
    }

    public getAllContent(): Observable<Content[]> {
        return this.http.get<Content[]>(environment.contentLocation);
    }
}