import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteWrapperComponent } from './site-wrapper/site-wrapper.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        SiteWrapperComponent
    ],
    exports: [
        SiteWrapperComponent
    ]
})
export class SharedModule {}