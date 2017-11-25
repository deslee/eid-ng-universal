import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Content } from "../shared/content.model";
import { ContentService } from "../shared/content.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class ContentListResolver implements Resolve<Content[]> {
    constructor(
        private contentService: ContentService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Content[]> {
        return this.contentService.getAllContent()
            .map((contentList: Content[]) => {
                if (route.data.page === 'tagged') {
                    var tags = route.paramMap.get('tags').split(',');
                    contentList = _.filter(contentList, (content: Content) => _.intersection(content.tags, tags).length > 0)
                } else if (route.data.page === 'categories') {
                    var categories = route.paramMap.get('categories').split(',');
                    contentList = _.filter(contentList, (content: Content) => _.intersection(content.categories, categories).length > 0)
                } else if (route.data.page === 'index') {
                    contentList = _.filter(contentList, (content: Content) => content.isFeatured)
                }

                contentList = _.filter(contentList, { type: 'post' })

                return contentList;
            })
            .first();
    }
}