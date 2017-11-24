import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteWrapperComponent } from './site-wrapper/site-wrapper.component';
import { RouterModule } from '@angular/router';
import { SanitizeHtml } from './sanitize-html.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        SiteWrapperComponent,
        SanitizeHtml
    ],
    exports: [
        SiteWrapperComponent,
        SanitizeHtml
    ]
})
export class SharedModule {}