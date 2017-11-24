import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ContentListComponent } from "./content-list/content-list.component";
import { ContentItemComponent } from "./content-item/content-item.component";
import { SharedModule } from "../shared/shared.module";
import { ContentListResolver } from "./content-list/content-list-resolver.service";
import { ContentService } from "./shared/content.service";
import { ContentItemResolver } from "./content-item/content-item-resolver.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        HttpClientModule
    ],
    providers: [
        ContentService,
        ContentListResolver,
        ContentItemResolver
    ],
    declarations: [
        ContentListComponent,
        ContentItemComponent
    ]
})
export class ContentModule {

}