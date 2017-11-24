import { Injectable } from "@angular/core";
import { Content } from "./content.model";
import { Observable } from "rxjs";
import "rxjs/add/operator/delay";
import * as _ from "lodash";

@Injectable()
export class ContentService {
    private readonly mockContent: Content[] = [
        {
            id: 'hello-world',
            title: 'Hello world!',
            type: 'post',
            displayType: 'text',
            tags: ['test'],
            categories: [],
            publishedDate: '2017-11-23',
            updatedDate: '2017-11-23',
            author: '',
            metaDescription: 'Hello world! This is a test post.',
            summary: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            content: `
Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.

* one
* two
* three

1. a
2. b
3. b

Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
            `,
            properties: {}
        },
        {
            id: 'random-art',
            title: 'Random art',
            type: 'post',
            displayType: 'imageSet',
            tags: ['art'],
            categories: [],
            publishedDate: '2017-11-24',
            updatedDate: '2017-11-24',
            author: '',
            metaDescription: 'This is a test art post.',
            summary: 'Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. A printed work which cannot be read becomes a product without purpose.',
            content: `
This is a test art post

* one
* two

Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. A printed work which cannot be read becomes a product without purpose.
            `,
            properties: {
                images: [
                    {
                        url: 'https://previews.123rf.com/images/sonatasun/sonatasun1208/sonatasun120800031/14881853-Glade-of-buttercups-at-sunset-in-mountains-Tien-Shan-Kazakhstan-Stock-Photo.jpg',
                        description: 'this is image 1'
                    },
                    {
                        url: 'https://previews.123rf.com/images/ammentorp/ammentorp1604/ammentorp160400070/55353004-Man-and-woman-having-fun-on-an-off-road-adventure-Couple-riding-on-a-quad-bike-in-countryside-on-a-s-Stock-Photo.jpg',
                        description: 'this is image 2'
                    }                   
                ],
                thumbnail: 'https://previews.123rf.com/images/sonatasun/sonatasun1208/sonatasun120800031/14881853-Glade-of-buttercups-at-sunset-in-mountains-Tien-Shan-Kazakhstan-Stock-Photo.jpg',
            }
        },
        {
            id: 'random-video',
            title: 'Random video',
            type: 'post',
            displayType: 'video',
            tags: ['video'],
            categories: [],
            publishedDate: '2017-11-25',
            updatedDate: '2017-11-25',
            author: '',
            metaDescription: 'This is a test video post.',
            summary: 'Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
            content: `
This is a test video post

* one
* two

1. a
2. b
            `,
            properties: {
                video: {
                    code: '<iframe src="https://player.vimeo.com/video/237001044?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                    description: 'this is a video'
                }
            }
        }
    ];

    constructor() {

    }

    getAllContent(): Observable<Content[]> {
        return Observable.of(this.mockContent);
    }

    getContentById(id: string): Observable<Content> {
        var content = _.find(this.mockContent, {id: id});
        return Observable.of(content);
    }
}