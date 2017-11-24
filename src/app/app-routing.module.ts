import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './content/content.module#ContentModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: "enabled" })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}