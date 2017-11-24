import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContentListComponent } from './content/content-list/content-list.component';
import { ContentModule } from './content/content.module';
import { ContentListResolver } from './content/content-list/content-list-resolver.service';
import { ContentItemResolver } from './content/content-item/content-item-resolver.service';
import { ContentItemComponent } from './content/content-item/content-item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: ContentListComponent,
        data: {
            page: 'index'
        },
        resolve: {
            contentList: ContentListResolver
        }
    },
    { path: 'bio', component: AboutComponent },
    {
        path: 'archives',
        component: ContentListComponent,
        data: {
            page: 'archives'
        },
        resolve: {
            contentList: ContentListResolver
        }
    },
    {
        path: 'categories/:categories',
        component: ContentListComponent,
        data: {
            page: 'categories'
        },
        resolve: {
            contentList: ContentListResolver
        }
    },
    {
        path: 'tagged/:tags',
        component: ContentListComponent,
        data: {
            page: 'tagged'
        },
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
        ContentModule,
        RouterModule.forRoot(routes, { initialNavigation: "enabled" })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }