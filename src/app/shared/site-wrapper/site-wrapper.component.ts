import { Component } from "@angular/core";
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-site-wrapper',
    templateUrl: './site-wrapper.component.html',
    styleUrls: [ './site-wrapper.component.css' ]
})
export class SiteWrapperComponent {

    title = environment.title;
    subtitle = environment.subtitle;
    copyright = environment.copyright;

    constructor(
    ) {
        
    }
}