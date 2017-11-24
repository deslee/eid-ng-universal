import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Content } from "../shared/content.model";

@Component({
    selector: 'app-content-item',
    templateUrl: './content-item.component.html',
    styleUrls: [ './content-item.component.css' ]
})
export class ContentItemComponent {
    contentItem: Content;

    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute
    ) {
        this.route.data.subscribe((data: { contentItem: Content }) => {
            this.contentItem = data.contentItem;
        })
        title.setTitle(this.contentItem ? this.contentItem.title : 'Not Found');
    }
}