import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: 'bio', component: AboutComponent },
    { path: '', loadChildren: './content/content.module#ContentModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: "enabled" })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}