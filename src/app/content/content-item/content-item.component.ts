import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-content-item',
    templateUrl: './content-item.component.html',
    styleUrls: [ './content-item.component.css' ]
})
export class ContentItemComponent {
    constructor(private meta: Meta, private title: Title) {
        title.setTitle("hello content");
    }
}