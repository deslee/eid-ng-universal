import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentItemComponent } from './content-item/content-item.component';
import { ContentItemResolver } from './content-item/content-item-resolver.service';
import { ContentListResolver } from './content-list/content-list-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: ContentListComponent,
        resolve: {
            contentList: ContentListResolver
        }
    },
    {
        path: ':id',
        component: ContentItemComponent,
        resolve: {
            contentItem: ContentItemResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes) 
    ],
    providers: [
        ContentItemResolver,
        ContentListResolver
    ],
    exports: [ RouterModule ]
})
export class ContentRoutingModule {}