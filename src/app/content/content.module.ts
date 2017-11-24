import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentItemComponent } from './content-item/content-item.component';
import { ContentService } from './shared/content.service';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ContentRoutingModule,
        MarkdownToHtmlModule
    ],
    providers: [
        ContentService
    ],
    declarations: [
        ContentListComponent,
        ContentItemComponent
    ]
})
export class ContentModule {}