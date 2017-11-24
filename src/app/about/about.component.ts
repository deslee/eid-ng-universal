import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: [ './about.component.css' ]
})
export class AboutComponent {
    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute
    ) {
        title.setTitle("About");
    }
}