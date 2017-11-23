import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentItemComponent } from './content-item/content-item.component';
import { ContentService } from './shared/content.service';

@NgModule({
    imports: [
        CommonModule,
        ContentRoutingModule
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