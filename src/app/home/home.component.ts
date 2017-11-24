import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute
    ) {
        title.setTitle("Elizabeth I. Del Rosario");
    }
}