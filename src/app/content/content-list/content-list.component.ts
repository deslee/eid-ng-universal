import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Content } from "../shared/content.model";

@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: [ './content-list.component.css' ]
})
export class ContentListComponent {

    contentList: Content[];

    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute
    ) {
        title.setTitle("hello content");
        this.route.data.subscribe((data: { contentList: Content[] }) => {
            this.contentList = data.contentList;
        })
    }
}