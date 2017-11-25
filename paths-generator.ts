import { ContentService } from "./src/app/content/shared/content.service";
import * as _ from "lodash";
import { Content } from "./src/app/content/shared/content.model";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { ContentLoaderService } from "./src/app/content/shared/content-loader.service";
import { environment } from "./src/environments/environment.prod";
const https = require('https');

const paths: string[] = [
  '/',
  'bio',
  'not-found'
];

var contentLoader: ContentLoaderService = {
  http: undefined,
  getAllContent() {
    console.log('env', environment);
    var subject = new Subject<Content[]>();

    https.get(environment.contentLocation, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var contentList: Content[] = JSON.parse(data);
        subject.next(contentList);
        subject.complete();
      });
    });

    return subject.asObservable();
  }
}

var contentService = new ContentService(contentLoader);

export var getRoutes = contentService.getAllContent().map((contentList: Content[]) => {
  return _.map(contentList, (c: Content) => c.id).concat(paths);
});