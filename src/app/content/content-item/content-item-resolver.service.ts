import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Content } from "../shared/content.model";
import { ContentService } from "../shared/content.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/first";

@Injectable()
export class ContentItemResolver implements Resolve<Content> {
    constructor(
        private contentService: ContentService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Content> {
        let id = route.paramMap.get('id');

        return this.contentService.getContentById(id).first();
    }
}