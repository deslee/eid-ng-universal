import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentItemComponent } from './content-item/content-item.component';

const routes: Routes = [
    {
        path: '',
        component: ContentListComponent
    },
    {
        path: ':id',
        component: ContentItemComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class ContentRoutingModule {}