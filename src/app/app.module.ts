import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'descms'}),
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
