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
            summary: 'Hello world! This is a test post.',
            content: `
This is a test post

* one
* two
* three

1. a
2. b
3. b
            `,
            properties: {}
        },
        {
            id: 'random-art',
            title: 'Random art',
            type: 'post',
            displayType: 'imageCarousel',
            tags: ['art'],
            categories: [],
            publishedDate: '2017-11-24',
            updatedDate: '2017-11-24',
            author: '',
            metaDescription: 'This is a test art post.',
            summary: 'This is a test art post.',
            content: `
This is a test art post

* one
* two

1. a
2. b
            `,
            properties: {
                carousel: [
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
            summary: 'This is a test video post.',
            content: `
This is a test video post

* one
* two

1. a
2. b
            `,
            properties: {
                video: {
                    url: 'https://vimeo.com/243940584',
                    description: 'this is a video'
                },   
                thumbnail: 'https://i.vimeocdn.com/video/668208019_780x439.webp',
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