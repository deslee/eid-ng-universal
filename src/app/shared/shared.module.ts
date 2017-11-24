import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteWrapperComponent } from './site-wrapper/site-wrapper.component';
import { RouterModule } from '@angular/router';
import { SanitizeHtml } from './pipes/sanitize-html.pipe';
import { MarkdownToHtml } from './pipes/markdown-to-html.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        SiteWrapperComponent,
        SanitizeHtml,
        MarkdownToHtml
    ],
    exports: [
        SiteWrapperComponent,
        SanitizeHtml,
        MarkdownToHtml
    ]
})
export class SharedModule {}