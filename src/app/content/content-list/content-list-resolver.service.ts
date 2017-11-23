import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Content } from "../shared/content.model";
import { ContentService } from "../shared/content.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from "rxjs";

@Injectable()
export class ContentListResolver implements Resolve<Content[]> {
    constructor(
        private contentService: ContentService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Content[]> {
        return this.contentService.getAllContent().first();
    }
}