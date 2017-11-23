import { NgModule } from '@angular/core';
import { ContentRoutingModule } from './content-routing.module';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentItemComponent } from './content-item/content-item.component';

@NgModule({
    imports: [
        ContentRoutingModule
    ],
    declarations: [
        ContentListComponent,
        ContentItemComponent
    ]
})
export class ContentModule {}