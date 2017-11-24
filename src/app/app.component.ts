import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private static previousRoutesUrl = new Array<string>();

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe((event: NavigationStart) => {
      if (event instanceof NavigationStart) {

        var currentRoute = this.routeName(event.url);
        var previousRoute = _.nth(AppComponent.previousRoutesUrl, -2);

        if (currentRoute != previousRoute) {
          window.scrollTo(0, 0);
        }
        else {
        }

        AppComponent.previousRoutesUrl.push(currentRoute);
      }
    },
      error => console.error(error));
  }

  private routeName(url: string) {
    return url;
  }

  onDeactivate() {
  }
}
