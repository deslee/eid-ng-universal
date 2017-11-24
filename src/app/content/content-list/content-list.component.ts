import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Content } from "../shared/content.model";
import { environment } from "../../../environments/environment";
import { OnInit } from "@angular/core";
import * as _ from 'lodash';

@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    page: string;
    contentList: Content[];

    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute
    ) {

        this.page = this.route.snapshot.data.page;
    }

    ngOnInit() {
        if (this.getTitle()) {
            this.title.setTitle(this.getTitle());
        }

        this.route.data.subscribe((data: { contentList: Content[] }) => {
            this.contentList = data.contentList;
        })
    }

    getTitle() {
        switch (this.page) {
            case 'index':
                return null;
            case 'archives':
                return "Archives";
            case 'tagged':
                return 'Tagged: ' + this.route.snapshot.paramMap.get('tags')
                    .split(',')
                    .map(s => _.replace(s, '-', ' '))
                    .map(_.capitalize)
                    .join(', ');
            case 'categories':
                return 'Categories: ' + this.route.snapshot.paramMap.get('categories')
                    .split(',')
                    .map(_.capitalize)
                    .join(', ');
        }
    }

    getContent(contentItem: Content): string {
        if (contentItem.summary) {
            return contentItem.summary
        } else if (contentItem.content) {
            return contentItem.content;
        } else {
            return null;
        }
    }
}