import { ContentService } from "./src/app/content/shared/content.service";
import * as _ from "lodash";
import { Content } from "./src/app/content/shared/content.model";

const paths: string[] = [
  '/',
  'bio',
  'not-found'
];

var contentService = new ContentService();

export var getRoutes = contentService.getAllContent().map((contentList: Content[]) => {
  return _.map(contentList, (c: Content) => c.id).concat(paths);
});